import { useState } from "react";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

import { useGetQcsQuery } from "../../../../redux/features/api/qc";
import MyOldQcTable from "./partials/MyOldQcTable";
import { QCTableHeader } from "./config/constants";


const QCMyItems = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const token = getFromLocalStorage(authKey);
  const id = "65f7d1b8ff0aba99b376d459"
  const {
    data,
    isError,
    isLoading,
  } = useGetQcsQuery({
    id,
    token,
  });
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    console.error(isError);

    return <div>Error</div>;
  }

  const handleCheckboxChange = (index: string) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };
  const handleAllCheckboxChange = () => {
    if (checkedRows.length === data?.data?.length) {
      // If all checkboxes are already checked, uncheck them all
      setCheckedRows([]);
    } else {
      const allIds =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data?.data?.map((item: any) => item?._id).filter((id: string) => id !== undefined) || [];
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };
  console.log(data)
  return (
    <div className=" px-5">
      <Navbar name="QC My Library"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <MyOldQcTable
              Link="/complaints/order-details"
              itemData={data?.data}
              HeaderData={QCTableHeader}
              checkedRows={checkedRows}
              handleCheckboxChange={handleCheckboxChange}
              handleAllCheckboxChange={handleAllCheckboxChange}
            >
            </MyOldQcTable>
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default QCMyItems;

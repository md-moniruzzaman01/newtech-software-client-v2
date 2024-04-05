import {  useEffect, useState } from "react";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

import { useGetQcsQuery } from "../../../../redux/features/api/qc";
import QAAllTable from "./partials/QAAllTable";
import { QATableHeader } from "./config/constants";

const QCMyItems = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);

  const token = getFromLocalStorage(authKey);
  const id = "65f7d1b8ff0aba99b376d459";
  const { data, isError, isLoading } = useGetQcsQuery({
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
        data?.data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((item: any) => item?._id)
          .filter((id: string) => id !== undefined) || [];
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };

  return (
    <div className=" px-5">
      <Navbar name="QA All"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <QAAllTable
              Link="/qc/order-details"
              itemData={data?.data}
              HeaderData={QATableHeader}
              checkedRows={checkedRows}
              handleCheckboxChange={handleCheckboxChange}
              handleAllCheckboxChange={handleAllCheckboxChange}
            />
          </div>
        </div>
          <div className="absolute bottom-2 right-[50px]">
          <Pagination
            limit={limit}
            currentPage={currentPage}
            totalItems={totalItems}
            setCurrentPage={setCurrentPage}
          />
          </div>
      </div>
    </div>
  );
};

export default QCMyItems;

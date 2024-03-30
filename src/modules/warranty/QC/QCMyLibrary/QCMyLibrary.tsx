/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { MyQCTableHeader } from "./config/constants";
import MyQcTable from "./partials/MyQcTable";
import { useGetQcsQuery } from "../../../../redux/features/api/qc";

const QCMyLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage to 1
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const token = getFromLocalStorage(authKey);
  const id = "65f7d1b8ff0aba99b376d459";
  const { data, isError, isLoading } = useGetQcsQuery({
    id,
    token,
  });
  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data]);
  // if (data?.data?.length > 0) {
  //   setCurrentPage(data?.meta?.page);
  //   setTotalItems(data?.meta?.total);
  //   setLimit(data?.meta?.limit);
  // }
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    console.error(isError);

    return <div>Error</div>;
  }

  const handleCheckboxChange = (repair_id: string, qc_id: string) => {
    if (
      checkedRows.some(
        (row) => row.repair_id === repair_id && row.qc_id === qc_id
      )
    ) {
      setCheckedRows(checkedRows.filter((item) => item?.qc_id !== qc_id));
    } else {
      setCheckedRows([...checkedRows, { qc_id, repair_id }]);
    }
  };
  const handleAllCheckboxChange = () => {
    if (checkedRows.length === data?.data?.length) {
      // If all checkboxes are already checked, uncheck them all
      setCheckedRows([]);
    } else {
      const allIds =
        data?.data
          ?.map((item: any) => ({
            qc_id: item?.id || "", // Set qc_id to item?.qc_id if it exists, otherwise set it to an empty string
            repair_id: item?.repair?.id || "", // Set repair_id to item?.repair_id if it exists, otherwise set it to an empty string
          }))
          .filter((obj: any) => obj.qc_id !== "" && obj.repair_id !== "") || [];
      if (allIds.length > 0) {
        setCheckedRows(allIds);
      }
    }
  };

  const handleDeleteData = () => {
    console.log(checkedRows);
  };
  const handleReturnData = () => {
    console.log(checkedRows);
  };
  return (
    <div className=" px-5">
      <Navbar name="QC My Library"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <div>
            <StatusGroup
              isSelected={checkedRows?.length <= 0}
              handleReturnData={handleReturnData}
              handleDeleteData={handleDeleteData}
              isButton
              dltBtnValue="Delete"
              returnBtnValue="Return to the QC Library"
            />
          </div>
          <div className="pt-5">
            <MyQcTable
              Link="/qc/order-details"
              itemData={data?.data}
              HeaderData={MyQCTableHeader}
              checkedRows={checkedRows}
              handleCheckboxChange={handleCheckboxChange}
              handleAllCheckboxChange={handleAllCheckboxChange}
            ></MyQcTable>
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

export default QCMyLibrary;

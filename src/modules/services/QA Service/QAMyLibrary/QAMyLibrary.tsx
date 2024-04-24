/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { MyQCTableHeader, fields, keys, tableLayout } from "./config/constants";

import { useGetQasQuery } from "../../../../redux/features/api/qa";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const QCMyLibraryService = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage to 1
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const token = getFromLocalStorage(authKey);
  const { data, isError, isLoading, error } = useGetQasQuery({
    token,
    query,
  });
  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, []);
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    console.error(isError);

    return <ErrorShow error={error}></ErrorShow>;
  }

  console.log(data);
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
      <Navbar name="Service My QA Library"></Navbar>
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
            <CommonTable
              link="/qa-items/order-details"
              headerData={MyQCTableHeader}
              itemData={data?.data}
              checkbox
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              dataLayout={tableLayout}
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

export default QCMyLibraryService;

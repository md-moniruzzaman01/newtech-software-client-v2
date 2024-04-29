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

import {
  useGetQasQuery,
  useQaReturnToLibraryMutation,
} from "../../../../redux/features/api/qa";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import swal from "sweetalert";

const QCMyLibraryService = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage to 1
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const [
    qaReturnToLibrary,
    {
      isSuccess: returnToLibraryIsSuccess,
      isError: returnToLibraryIsError,
      error: returnToLibraryError,
      isLoading: returnToLibraryLoading,
    },
  ] = useQaReturnToLibraryMutation();
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

  const handleReturnData = async () => {
    const fullData = {
      repairIds: checkedRows,
    };
    console.log(fullData);
    const result = await qaReturnToLibrary({ token, fullData });
    console.log(result);
    if (returnToLibraryIsSuccess) {
      swal("Success", "Return to library is done", "success");
    }
    if (returnToLibraryIsError) {
      swal("Error", `${returnToLibraryError}`, "error");
    }
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
              isReturnLoading={returnToLibraryLoading}
              isSelected={checkedRows?.length <= 0}
              handleReturnData={handleReturnData}
              isButton
              dltBtnValue="Delete"
              returnBtnValue="Return to the QC Library"
            />
          </div>
          <div className="pt-5">
            <CommonTable
              link="/service/qa-items/order-details"
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

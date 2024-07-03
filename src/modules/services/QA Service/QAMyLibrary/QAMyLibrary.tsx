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
  useGetMyQasQuery,
  useQaReturnToLibraryMutation,
} from "../../../../redux/features/api/qa";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";

const QCMyLibraryService = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage to 1
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const [qaReturnToLibrary, { isLoading: returnToLibraryLoading }] =
    useQaReturnToLibraryMutation();
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const token = getFromLocalStorage(authKey);
  const { data, isError, isLoading, error } = useGetMyQasQuery({
    token,
    query,
  });
  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data]);

  const handleReturnData = async () => {
    const fullData = {
      repairIds: checkedRows,
    };

    const result = await qaReturnToLibrary({ token, fullData });
    showSwal(result);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Service My QA Items"></Navbar>
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
              dltBtnValue="Delete"
              returnBtnValue="Return to the QA Library"
            />
          </div>
          <div className="pt-5">
            <CommonTable
              headerData={MyQCTableHeader}
              itemData={data?.data}
              checkbox
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              dataLayout={tableLayout}
              link="/service/qa-items/order-details"
            />
          </div>
        </div>
        <div className="fixed bottom-2  right-5">
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

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

import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { getUserInfo } from "../../../../services/auth.service";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import {
  useGetMyQasQuery,
  useQaReturnToLibraryMutation,
} from "../../../../redux/features/api/qa";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { showSwal } from "../../../../shared/helpers/SwalShower";

const QCMyLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage to 1
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();
  const [returnToLibrary, { isLoading: returnToLibraryIsLoading }] =
    useQaReturnToLibraryMutation();
  const { data, isError, isLoading, error } = useGetMyQasQuery({
    id: user._id,
    token,
    query,
  });

  const fullData = {
    repairIds: checkedRows,
  };

  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data]);
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }

  const handleReturnData = async () => {
    const result = await returnToLibrary({ token, fullData });
    showSwal(result);
  };
  return (
    <div className=" px-5">
      <Navbar name="My QA Items"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <div>
            <StatusGroup
              isSelected={checkedRows?.length <= 0}
              handleReturnData={handleReturnData}
              isReturnLoading={returnToLibraryIsLoading}
              isButton
              dltBtnValue="Delete"
              returnBtnValue="Return to the QA Library"
            />
          </div>
          <div className="pt-5">
            <CommonTable
              dataLayout={tableLayout}
              headerData={MyQCTableHeader}
              itemData={data?.data}
              checkbox
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
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

export default QCMyLibrary;

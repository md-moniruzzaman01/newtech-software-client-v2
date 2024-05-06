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
  useGetQcsQuery,
  useQcReturnToLibraryMutation,
} from "../../../../redux/features/api/qc";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { getUserInfo } from "../../../../services/auth.service";
import swal from "sweetalert";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";

const QCMyLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const [
    qcReturnToLibrary,
    {
      isError: returnToLibraryIsError,
      error: returnToLibraryError,
      isLoading: returnToLibraryLoading,
      isSuccess: returnToLibraryIsSuccess,
    },
  ] = useQcReturnToLibraryMutation();
  const [searchParams] = useSearchParams();
  const token = getFromLocalStorage(authKey);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const user = getUserInfo();
  const { data, isError, isLoading } = useGetQcsQuery({
    id: user._id,
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

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    console.error(isError);

    return <div>Error</div>;
  }

  const handleReturnData = async () => {
    const fullData = {
      repairIds: checkedRows,
    };
    await qcReturnToLibrary({ token, fullData });

    if (returnToLibraryIsSuccess) {
      swal("Success", "Return to library is done", "success");
    }
    if (returnToLibraryIsError) {
      swal("Error", `${returnToLibraryError}`, "error");
    }
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
              isReturnLoading={returnToLibraryLoading}
              isButton
              dltBtnValue="Delete"
              returnBtnValue="Return to the QC Library"
            />
          </div>
          <div className="pt-5">
            <CommonTable
              itemData={data?.data}
              headerData={MyQCTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
              link="/qc/order-details"
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

export default QCMyLibrary;

import { useSearchParams } from "react-router-dom";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import {
  useGetBuffersQuery,
  useUpdateBuffersMutation,
} from "../../../../redux/features/api/complaints";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import {
  btnValue,
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constant";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useEffect, useState } from "react";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import CommonTable from "../../../../common/components/Common Table/CommonTable";

const ComplaintBuffers = () => {
  const [isTrue, setIsTrue] = useState(false);
  const token = getFromLocalStorage(authKey);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [updateBuffer, { isLoading: updateBufferLoading }] =
    useUpdateBuffersMutation();

  const params = new URLSearchParams(window.location.search);
  const status = params.get("repair_status");
  console.log(status);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  // redux
  const {
    data: buffers,
    isLoading,
    isError,
    error,
  } = useGetBuffersQuery({ token, query });

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalItems(buffers.meta.total);
      setLimit(buffers.meta.limit);
      setCurrentPage(buffers?.meta?.page);
    }
  }, [isLoading, isError, buffers]);

  const handleReturnData = async () => {
    const fullData = {
      repairIds: checkedRows,
      repair_status: "Return to engineer",
    };

    const result = await updateBuffer({ token, fullData });
    showSwal(result);
  };
  const handleReturnCN = async () => {
    setIsTrue(true);
    const fullData = {
      repairIds: checkedRows,
      repair_status: "CN",
    };

    const result = await updateBuffer({ token, fullData });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      setIsTrue(false);
    }
    setIsTrue(false);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Buffers"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup
            handleReturnData={handleReturnData}
            isReturnCNLoading={isTrue}
            isReturnLoading={!isTrue && updateBufferLoading}
            handleReturnToCN={handleReturnCN}
            btnGroupValue={btnValue}
            isSelected={checkedRows?.length <= 0}
            returnBtnValue="Return To Engineer"
            returnCNBtnValue="CN"
            isDisabledCNBtn={status === "CN"}
          />
          <div className="pt-5">
            <CommonTable
              itemData={buffers?.data}
              headerData={complaintsTableHeader}
              dataLayout={tableLayout}
              checkbox
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              productData

              // link="/complaints/order-details"
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

export default ComplaintBuffers;

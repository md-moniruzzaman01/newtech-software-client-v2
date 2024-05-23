import { useSearchParams } from "react-router-dom";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { useGetBuffersQuery } from "../../../../redux/features/api/complaints";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import {
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constant";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useEffect, useState } from "react";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";

const ComplaintBuffers = () => {
  const token = getFromLocalStorage(authKey);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

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
          <StatusGroup btnGroupValue={[]} />
          <div className="pt-5">
            <CommonTable
              itemData={buffers?.data}
              headerData={complaintsTableHeader}
              dataLayout={tableLayout}
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

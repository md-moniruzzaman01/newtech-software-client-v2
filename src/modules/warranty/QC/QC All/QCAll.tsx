import { useEffect, useState } from "react";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { fields, keys, QCTableHeader, tableLayout } from "./config/constants";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { useGetAllProductsQuery } from "../../../../redux/features/api/qc";

const QCAll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const token = getFromLocalStorage(authKey);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const {
    data: qcData,
    isLoading,
    isError,
    error,
    isFetching,
  } = useGetAllProductsQuery({ token, query });

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalItems(qcData.meta.total);
      setLimit(qcData.meta.limit);
      setCurrentPage(qcData?.meta?.page);
    }
  }, [qcData, isLoading, isError]);

  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className="px-5">
      <Navbar name={"QC All"}></Navbar>
      <div className="py-5">
        <SearchBar />
      </div>
      <div className="bg-solidWhite p-3 space-y-3">
        <StatusGroup />
        <div className="rounded-t-md ">
          <CommonTable
            itemData={qcData?.data}
            headerData={QCTableHeader}
            dataLayout={tableLayout}
            productData
            loading={isLoading || isFetching}
          />

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
    </div>
  );
};

export default QCAll;

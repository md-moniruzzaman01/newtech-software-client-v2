import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { BillTableHeader, fields, keys, tableLayout } from "./config/constant";
import { useGetPendingBillsQuery } from "../../../../redux/features/api/bill";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";
import StatusGroup from "../../../../common/components/Status Group";

const BillPendingService = () => {
  const [billData, setBillData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const token = getFromLocalStorage(authKey);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const {
    data: complaintsData,
    isError: complaintsIsError,
    isLoading: complaintsLoading,
    error: complaintsError,
    isFetching,
  } = useGetPendingBillsQuery({
    token,
    query,
  });

  useEffect(() => {
    if (complaintsData) {
      setTotalItems(complaintsData.meta.total);
      setLimit(complaintsData.meta.limit);
      setCurrentPage(complaintsData?.meta?.page);
    }
  }, [complaintsData]);

  useEffect(() => {
    if (!complaintsLoading && !complaintsIsError) {
      setBillData(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsIsError]);

  if (complaintsIsError) {
    return <ErrorShow error={complaintsError} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Service Bill Pending" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={[]} />
          <div className="pt-5">
            <CommonTable
              dataLayout={tableLayout}
              headerData={BillTableHeader}
              itemData={billData}
              link="/complaints-service-payments"
              loading={complaintsLoading || isFetching}
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

export default BillPendingService;

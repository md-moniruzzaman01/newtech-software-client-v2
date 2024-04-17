import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import {
  BillServiceTableHeader,
  btnValue,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { useGetBillsQuery } from "../../../../redux/features/api/bill";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";

const InvoiceList = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);

  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const {
    data: billData,
    isError: billsError,
    isLoading: billsLoading,
  } = useGetBillsQuery({
    token,
    query,
  });

  useEffect(() => {
    if (billData) {
      setTotalItems(billData.meta.total);
      setLimit(billData.meta.limit);
      setCurrentPage(billData?.meta?.page);
    }
  }, [billData]);

  if (billsLoading) {
    return <LoadingPage />;
  }
  if (billsError) {
    return (
      <div className="min-h-screen flex justify-items-center items-center">
        <p>Error found</p>
      </div>
    );
  }
  return (
    <div className=" px-5">
      <Navbar name="Service Bill List" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={btnValue} status />
          <div className="pt-5">
            <CommonTable
              itemData={billData?.data}
              headerData={BillServiceTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              link="/complaints-service-payments"
              checkbox
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

export default InvoiceList;

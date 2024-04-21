import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import { BillTableHeader } from "./config/constant";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import BillPendingWarrantyTable from "./partials/BillPendingWarrantyTable";

const BillPendingService = () => {
  const [billData, setBillData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });

  useEffect(() => {
    if (complaintsData) {
      setTotalItems(complaintsData.meta.total);
      setLimit(complaintsData.meta.limit);
      setCurrentPage(complaintsData?.meta?.page);
    }
  }, [complaintsData]);

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setBillData(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);

  if (complaintsLoading) {
    return <LoadingPage />;
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
            <BillPendingWarrantyTable
              Link="/complaints/order-details"
              itemData={billData}
              HeaderData={BillTableHeader}
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

export default BillPendingService;
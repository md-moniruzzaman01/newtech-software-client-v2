import { useEffect, useState } from "react";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../shared/config/constaints";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import {
  customerTableHeader,
  fields,
  keys,
  tableLayout,
} from "./Config/Constant";
import { useGetWalkingCustomerQuery } from "../../../redux/features/api/users";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";

const WalkingCustomerForService = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();

  const token = getFromLocalStorage(authKey);

  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  const { data: walkingCustomer, isLoading: customerLoading } =
    useGetWalkingCustomerQuery({
      token,
      query,
    });

  useEffect(() => {
    if (walkingCustomer?.success) {
      setTotalItems(walkingCustomer?.meta?.total);
      setLimit(walkingCustomer?.meta?.limit);
      setCurrentPage(walkingCustomer?.meta?.page);
    }
  }, [walkingCustomer]);

  if (customerLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Service Walking Customer" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div className="pt-5">
          <CommonTable
            headerData={customerTableHeader}
            dataLayout={tableLayout}
            itemData={walkingCustomer?.data}
          />
        </div>

        <div className="fixed bottom-2 right-5">
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

export default WalkingCustomerForService;

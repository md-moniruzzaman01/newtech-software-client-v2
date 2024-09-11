import { useSearchParams } from "react-router-dom";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import {
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import { useGetMyComplaintQuery } from "../../../../redux/features/api/complaints";
import { getUserInfo } from "../../../../services/auth.service";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { useEffect, useState } from "react";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const MyComplaints = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [totalItems, setTotalItems] = useState(10);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();

  const { data, isError, isLoading, error } = useGetMyComplaintQuery({
    id: user?.userId,
    query,
    token,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data, isError, isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5  min-h-screen ">
      <Navbar name="My Complaints"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite relative">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <CommonTable
              itemData={data?.data}
              headerData={complaintsTableHeader}
              link="/complaints/order-details"
              dataLayout={tableLayout}
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
        <Pagination
          limit={limit}
          totalItems={totalItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MyComplaints;

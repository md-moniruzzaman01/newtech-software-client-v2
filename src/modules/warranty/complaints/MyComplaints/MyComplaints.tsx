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
import { useState } from "react";

const MyComplaints = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 50;
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();
  const { data, isError, isLoading } = useGetMyComplaintQuery({
    id: user?.userId,
    query,
    token,
  });
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return (
      <div>
        <div>
          <h1>Somethings Wrong</h1>
          <p>Please contact to Developer.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" px-5">
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
        <div className="sticky bottom-0">
          <div className="bg-slate-100 h-14 p-2">
            <Pagination
              limit={limit}
              totalItems={data?.meta?.total}
              currentPage={data?.meta?.page}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComplaints;

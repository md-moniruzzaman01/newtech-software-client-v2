import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import { btnValue } from "./config/constants";
import ComplaintTable from "./Partials/ComplaintsTable/ComplaintsTable";
import {
  DemoTableHeaderView,
  authKey,
} from "../../../../shared/config/constaints";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../../libs/local_storage";

//internal

const Complaint = () => {
  const [complaints, setComplaints] = useState();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  const [activeRoute, setActiveRoute] = useState(false);

  const [searchParams] = useSearchParams();

  const queryParams = [];
  const fields =
    "id,customer,brand_name,repair_status,order_number,received_date,Qc,RepairItem,Qa,partrequest";
  const brand = searchParams.get("brand");
  const branch = searchParams.get("branch");
  const sort = searchParams.get("sort");
  const status = searchParams.get("repair-status");
  const search = searchParams.get("search");
  if (brand) {
    queryParams.push(`brand=${brand}`);
  }
  if (branch) {
    queryParams.push(`branch=${branch}`);
  }
  if (sort) {
    queryParams.push(`sort=${sort}`);
  }
  if (status) {
    queryParams.push(`repair_status=${status}`);
  }
  if (search) {
    queryParams.push(`search=${search}`);
  }
  queryParams.push(`selectedFields=${fields}`);
  const query = queryParams?.join("&");
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    query,
    token,
  });

  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
    if (!complaintsLoading && !complaintsError) {
      setComplaints(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Complaint"></Navbar>
      <div className="pt-5">
        <SearchBar
          link={`${activeRoute ? "/add-warranty-complaint" : "/add-complaint"}`}
        ></SearchBar>
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={btnValue} />
          <div className="pt-5">
            <ComplaintTable
              Link="/complaints/order-details"
              itemData={complaints}
              HeaderData={DemoTableHeaderView}
            />
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  );
};

export default Complaint;

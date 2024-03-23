import StatusGroup from "../../../common/components/Status Group";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import {
  DemoTableHeaderView,
  DemoTableValue,
} from "../../../shared/config/constaints";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import ComplaintTable from "./Partials/ComplaintsTable/ComplaintsTable";
import { useGetComplaintsQuery } from "../../../redux/features/api/complaints";
import { btnValue } from "./config/constants";

const Complaint = () => {
  const [complaints, setComplaints] = useState();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  const [activeRoute, setActiveRoute] = useState(false);

  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({});

  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
    if (!complaintsLoading && !complaintsError) {
      setComplaints(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);

  console.log(complaints);

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
              itemData={DemoTableValue}
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

import StatusGroup from "../../../common/components/Status Group";
import Table from "../../../common/components/Table/Table";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import {
  DemoTableHeaderView,
  DemoTableValue,
} from "../../../shared/config/constaints";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

const Complaint = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  const [activeRoute, setActiveRoute] = useState(false);
  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
  }, []);
  console.log(activeRoute);
  return (
    <div className=" px-5">
      <Navbar name="Complaint"></Navbar>
      <div className="pt-5">
        <SearchBar
          link={`${
            activeRoute
              ? "/complaints/add-warranty-complaint"
              : "/complaints/add-complaint"
          }`}
        ></SearchBar>
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup></StatusGroup>
          <div className="pt-5">
            <Table
              view
              Link="/complaints/order-details"
              itemData={DemoTableValue}
              HeaderData={DemoTableHeaderView}
            ></Table>
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

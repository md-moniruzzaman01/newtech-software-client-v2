import { useState } from "react";
import StatusGroup from "../../../common/components/Status Group";
import Table from "../../../common/components/Table/Table";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import {
  DemoTableHeaderView,
  DemoTableValue,
} from "../../../shared/config/constaints";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";

const Complaint = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className=" px-5">
      <Navbar name="Complaint"></Navbar>
      <div className="pt-5">
        <SearchBar link="/complaints/add-complaint"></SearchBar>
      </div>
      <div className="mt-5 py-3 bg-[#FBFBFB]">
        <div>
          <StatusGroup></StatusGroup>
          <div className="pt-5 ">
            <Table
              view
              Link="/complaints/order-details"
              itemData={DemoTableValue}
              HeaderData={DemoTableHeaderView}
            ></Table>
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={totalItems}
            limit={limit}
          ></Pagination>
        </div>
      </div>
    </div>
  );
};

export default Complaint;

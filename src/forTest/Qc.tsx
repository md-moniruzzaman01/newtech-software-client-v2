import SearchBar from "../common/components/SearchBar/SearchBar";
import Navbar from "../common/widgets/Navbar/Navbar";
import SideBar from "../common/widgets/SideBar/SideBar";
import { useState } from "react";
import Pagination from "../common/widgets/Pagination/Pagination";
import TableWithPhoto from "../common/components/TableWithPhoto/TableWithPhoto";
import { DemoTableHeader } from "../shared/config/constaints";

const Qc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 px-5">
        <Navbar name={"QC"}></Navbar>
        <div className="py-5">
          <SearchBar></SearchBar>
        </div>
        <div className="bg-[#FBFBFB]">
          <filter></filter>
          <div className="  rounded-t-md ">
            <TableWithPhoto HeaderData={DemoTableHeader}></TableWithPhoto>
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
      </div>
    </div>
  );
};

export default Qc;

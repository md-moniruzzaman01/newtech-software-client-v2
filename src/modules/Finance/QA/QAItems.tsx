import { useState } from "react";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import TableWithPhoto from "../../../common/components/TableWithPhoto/TableWithPhoto";
import { DemoTableHeader } from "../../../shared/config/constaints";
import Pagination from "../../../common/widgets/Pagination/Pagination";

const QAItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="px-5">
      <Navbar name={"QC"}></Navbar>
      <div className="py-5">
        <SearchBar
          linkBtn="+ Delivered to Desk"
          filterPlaceHolder="+ Assign Engineer"
          isNeedFilter
        ></SearchBar>
      </div>
      <div className="bg-[#FBFBFB]">
        <filter></filter>
        <div className="  rounded-t-md ">
          <TableWithPhoto
            HeaderData={DemoTableHeader}
            link="/qa-items/order-details"
          ></TableWithPhoto>
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
  );
};

export default QAItems;

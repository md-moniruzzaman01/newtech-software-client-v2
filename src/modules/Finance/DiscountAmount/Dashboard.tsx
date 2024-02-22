import { useState } from "react";
import SideBar from "../../../common/widgets/SideBar/SideBar";
import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import {
  DemoTableHeader,
  DemoTableValue,
  FilterOptions,
} from "../../../shared/config/constaints";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import Table from "../../../common/components/Table/Table";

const DiscountAmount = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 px-5">
        <BranchCommonHeader
          selectItems={FilterOptions}
          title="Discount Amount"
        ></BranchCommonHeader>
        <div className=" mt-5 py-3 bg-[#FBFBFB]">
          <div>
            <Table
              itemData={DemoTableValue}
              HeaderData={DemoTableHeader}
            ></Table>
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
    </div>
  );
};

export default DiscountAmount;

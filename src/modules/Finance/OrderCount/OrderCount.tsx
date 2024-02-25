import { useState } from "react";
import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import {
  DemoTableHeader,
  DemoTableValue,
  FilterOptions,
} from "../../../shared/config/constaints";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import Table from "../../../common/components/Table/Table";
import StatusGroup from "../../../common/components/Status Group";

const OrderCount = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="px-5">
      <BranchCommonHeader
        selectItems={FilterOptions}
        title="Order Count"
      ></BranchCommonHeader>
      <div className="mt-5 py-3 bg-[#FBFBFB]">
        <div className="px-5">
          <StatusGroup></StatusGroup>
          <div className="pt-5 ">
            <Table
              itemData={DemoTableValue}
              HeaderData={DemoTableHeader}
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

export default OrderCount;

import { useState } from "react";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import {
  DemoTableHeaderView,
  DemoTableValue,
} from "../../../../shared/config/constaints";
import { tableLayout } from "./config/constant";

const ComplaintBuffers = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  return (
    <div className=" px-5">
      <Navbar name="Buffers"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={[]} />
          <div className="pt-5">
            <CommonTable
              itemData={DemoTableValue}
              headerData={DemoTableHeaderView}
              dataLayout={tableLayout}
              link="/complaints/order-details"
            />
          </div>
        </div>
          <div className="absolute bottom-2 right-[50px]">
          <Pagination
            limit={limit}
            currentPage={currentPage}
            totalItems={totalItems}
            setCurrentPage={setCurrentPage}
          />
          </div>
      </div>
    </div>
  );
};

export default ComplaintBuffers;

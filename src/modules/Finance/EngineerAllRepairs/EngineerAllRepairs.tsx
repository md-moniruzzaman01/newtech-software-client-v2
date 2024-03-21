import SearchBar from "../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../common/components/Status Group";
import Table from "../../../common/components/Table/Table";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import {
  DemoTableHeaderView,
  DemoTableValue,
} from "../../../shared/config/constaints";

const EngineerAllRepairs = () => {
  return (
    <div className=" px-5">
      <Navbar name="All Repairs" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
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
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default EngineerAllRepairs;

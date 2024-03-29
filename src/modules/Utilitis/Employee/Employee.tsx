import Button from "../../../common/components/Button";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { DemoTableHeaderForCustomer } from "../../../shared/config/constaints";

import SearchBar from "../../../common/components/SearchBar/SearchBar";
import EmployeeTable from "./partials/EmployeeTable";

const Employee = () => {
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Employee" />

      <div className="py-5">
        <SearchBar linkBtn="+ Add Team" />
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div className="space-x-3  pb-2">
          <Button className="bg-transparent !text-solidBlack shadow">
            All
          </Button>
          <Button className="bg-transparent !text-solidBlack shadow">
            Active
          </Button>
          <Button className="bg-transparent !text-solidBlack shadow">
            Deactivate
          </Button>
        </div>
        <div>
          <EmployeeTable
            HeaderData={DemoTableHeaderForCustomer}
            link="/employee/order-details"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-5">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default Employee;

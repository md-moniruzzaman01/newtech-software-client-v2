import { useState } from "react";
import Button from "../../../common/components/Button";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { DemoTableHeaderForCustomer } from "../../../shared/config/constaints";
import CustomerInfoTable from "./partials/CustomerInfoTable";

const Customer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Customer Info" />

      <div className="flex justify-end py-5">
        <Button primary>+ Add Customer</Button>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite py-3">
        <div className="space-x-3 pl-5 py-3">
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
        <div className="px-5">
          <CustomerInfoTable
            HeaderData={DemoTableHeaderForCustomer}
            link="/customer/order-details"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-5">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={totalItems}
          limit={limit}
        ></Pagination>
      </div>
    </div>
  );
};

export default Customer;

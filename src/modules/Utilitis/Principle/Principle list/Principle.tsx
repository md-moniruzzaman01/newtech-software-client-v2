
import { NavLink } from "react-router-dom";
// internal
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Button from "../../../../common/components/Button";
import TableStatus from "../../../../common/components/TableStatus/TableStatus";
import { btnValues } from "./config/constants";
import CustomerInfoTable from "../../Partner/CustomerAdd/partials/CustomerInfoTable";
import { DemoTableHeaderForCustomer } from "../../../../shared/config/constaints";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

const Principle = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Principle Info" />

      <div className="flex justify-end py-5">
        <NavLink to="/partner/add">
          <Button primary>+ Add Partner</Button>
        </NavLink>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div className="py-2">
          <TableStatus btnValues={btnValues} />
        </div>
        <div>
          <CustomerInfoTable
            HeaderData={DemoTableHeaderForCustomer}
            link="/partner/order-details"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-5">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default Principle;

import Button from "../../../common/components/Button";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { DemoTableHeaderForCustomer } from "../../../shared/config/constaints";
import { NavLink } from "react-router-dom";
import TableStatus from "../../../common/components/TableStatus/TableStatus";
import { btnValues } from "./config/constants";
import CustomerInfoTable from "../Partner/partials/CustomerInfoTable";

const Admin = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Admin Info" />

      <div className="flex justify-end py-5 gap-2">
        <div>
          <NavLink className="!bg-transparent" to={"/complaints/add-complaint"}>
            <Button primary>+ Add Complaints</Button>
          </NavLink>
        </div>
        <div>
          <NavLink className="!bg-transparent" to={"/Add-brand"}>
            <Button primary>+ Add Brand</Button>
          </NavLink>
        </div>
        <div>
          <NavLink className="!bg-transparent" to={"/category/add-category"}>
            <Button primary>+ Add Category</Button>
          </NavLink>
        </div>
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

export default Admin;

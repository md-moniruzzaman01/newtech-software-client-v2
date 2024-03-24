
import Button from "../../../../common/components/Button";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { DemoTableHeaderForCustomer } from "../../../../shared/config/constaints";
import CustomerInfoTable from "./partials/CustomerInfoTable";
import { NavLink } from "react-router-dom";

const Partner = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Partner Info" />

      <div className="flex justify-end py-5">
        <NavLink to="/partner/add">
          <Button primary>+ Add Partner</Button>
        </NavLink>
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

export default Partner;

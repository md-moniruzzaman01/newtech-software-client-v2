import Navbar from "../../../common/widgets/Navbar/Navbar";
import { DemoTableHeaderForInventory } from "../../../shared/config/constaints";

import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import InventoryRequestInfoTable from "./partials/InventoryRequestInfoTable";
import InventoryRequestStatusGroup from "../InventoryApprove/partials/InventoryApproveStatusGroup";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import InventoryTableFilter from "../../../common/components/InventoryTableFilter/InventoryTableFilter";

const InventoryRequest = () => {
  return (
    <div className="px-5">
      <Navbar name="Inventory Request" />
      <div className="pt-5 pb-2">
        <InventoryStatusGroup />
      </div>

      <div className="bg-solidWhite py-2 px-2">
        <InventoryTableFilter header="Inventory Request" />
        <div className="pb-3">
          <InventoryRequestStatusGroup />
        </div>
        <InventoryRequestInfoTable
          HeaderData={DemoTableHeaderForInventory}
          link="/inventory/request-details"
        />
        <div className="absolute bottom-0 right-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default InventoryRequest;

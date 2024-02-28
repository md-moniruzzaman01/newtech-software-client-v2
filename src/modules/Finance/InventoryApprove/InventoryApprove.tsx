import Navbar from "../../../common/widgets/Navbar/Navbar";
import { DemoTableHeaderForInventory } from "../../../shared/config/constaints";

import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import InventoryRequestInfoTable from "./partials/InventoryApproveInfoTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import InventoryTableFilter from "../../../common/components/InventoryTableFilter/InventoryTableFilter";
import InventoryApproveStatusGroup from "./partials/InventoryApproveStatusGroup";

const InventoryApprove = () => {
  return (
    <div className="px-5">
      <Navbar name="Inventory Approve" />
      <div className="pt-5 pb-2">
        <InventoryStatusGroup />
      </div>

      <div className="bg-solidWhite py-2 px-2">
        <InventoryTableFilter header="Inventory Approve" />
        <div className="pb-3">
          <InventoryApproveStatusGroup />
        </div>
        <InventoryRequestInfoTable HeaderData={DemoTableHeaderForInventory} />
        <div className="absolute bottom-0 right-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default InventoryApprove;

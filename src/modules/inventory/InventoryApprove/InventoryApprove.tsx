import Navbar from "../../../common/widgets/Navbar/Navbar";

import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import InventoryRequestInfoTable from "./partials/InventoryApproveInfoTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import InventoryTableFilter from "../../../common/components/InventoryTableFilter/InventoryTableFilter";
import InventoryApproveStatusGroup from "./partials/InventoryApproveStatusGroup";
import { TableHeaderForInventory } from "../Inventory/config/constants";

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
        <InventoryRequestInfoTable HeaderData={TableHeaderForInventory} />
        <div className="absolute bottom-0 right-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default InventoryApprove;

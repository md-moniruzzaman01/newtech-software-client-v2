import Navbar from "../../../common/widgets/Navbar/Navbar";

import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import InventoryRequestStatusGroup from "../InventoryApprove/partials/InventoryApproveStatusGroup";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import InventoryTableFilter from "../../../common/components/InventoryTableFilter/InventoryTableFilter";
import { TableHeaderForInventory } from "../Inventory/config/constants";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useEffect, useState } from "react";
import { useGetInventoryPartsQuery } from "../../../redux/features/api/inventory";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { query, tableLayout } from "./config/constants";
import CommonTable from "../../../common/components/Common Table/CommonTable";

const InventoryRequest = () => {
  const token = getFromLocalStorage(authKey);
  const [inventoryData, setInventoryData] = useState([]);

  const {
    data: inventory,
    isLoading: inventoryLoading,
    isError: inventoryError,
  } = useGetInventoryPartsQuery({ token, query });

  useEffect(() => {
    if (!inventoryError && !inventoryLoading) {
      setInventoryData(inventory?.data);
    }
  }, [inventoryError, inventoryLoading, inventory]);

  if (inventoryLoading) {
    return <LoadingPage />;
  }
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

        <CommonTable
          headerData={TableHeaderForInventory}
          itemData={inventoryData}
          dataLayout={tableLayout}
          link="/inventory/request-details"
        />
        <div className="fixed bottom-2  right-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default InventoryRequest;

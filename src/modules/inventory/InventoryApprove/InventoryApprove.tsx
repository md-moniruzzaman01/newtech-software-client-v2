import Navbar from "../../../common/widgets/Navbar/Navbar";

import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import InventoryTableFilter from "../../../common/components/InventoryTableFilter/InventoryTableFilter";
import InventoryApproveStatusGroup from "./partials/InventoryApproveStatusGroup";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useEffect, useState } from "react";
import { useGetInventoryPartsQuery } from "../../../redux/features/api/inventory";
import {
  TableHeaderForInventory,
  query,
  tableLayout,
} from "./config/constants";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";

const InventoryApprove = () => {
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
      <Navbar name="Inventory Approve" />
      <div className="pt-5 pb-2">
        <InventoryStatusGroup />
      </div>

      <div className="bg-solidWhite py-2 px-2">
        <InventoryTableFilter header="Inventory Approve" />
        <div className="pb-3">
          <InventoryApproveStatusGroup />
        </div>
        <CommonTable
          headerData={TableHeaderForInventory}
          itemData={inventoryData}
          dataLayout={tableLayout}
          link="/inventory/request-details"
        />
        <div className="absolute bottom-0 right-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default InventoryApprove;

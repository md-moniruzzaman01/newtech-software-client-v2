import Navbar from "../../../common/widgets/Navbar/Navbar";

import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import InventoryTableFilter from "../../../common/components/InventoryTableFilter/InventoryTableFilter";
// import InventoryApproveStatusGroup from "./partials/InventoryApproveStatusGroup";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useEffect, useState } from "react";
import { useGetInventoryPartsApproveQuery } from "../../../redux/features/api/inventory";
import {
  TableHeaderForInventory,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";

const InventoryApprove = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();
  const token = getFromLocalStorage(authKey);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const [inventoryData, setInventoryData] = useState([]);

  const {
    data: inventory,
    isLoading: inventoryLoading,
    isError: inventoryError,
  } = useGetInventoryPartsApproveQuery({ token, query });

  useEffect(() => {
    if (inventory) {
      setTotalItems(inventory.meta.total);
      setLimit(inventory.meta.limit);
      setCurrentPage(inventory?.meta?.page);
    }
  }, [inventory]);

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
        {/* <div className="pb-3">
          <InventoryApproveStatusGroup />
        </div> */}
        <CommonTable
          headerData={TableHeaderForInventory}
          itemData={inventoryData}
          dataLayout={tableLayout}
          link="/inventory/request-details"
        />
        <div className="fixed bottom-2  right-5">
          <Pagination
            currentPage={currentPage}
            limit={limit}
            setCurrentPage={setCurrentPage}
            totalItems={totalItems}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryApprove;

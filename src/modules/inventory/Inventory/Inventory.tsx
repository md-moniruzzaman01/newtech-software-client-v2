import { useEffect, useState } from "react";
import BranchChart from "../../../common/components/BranchChart/BranchChart";
import Button from "../../../common/components/Button";
import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import VerticalChart from "../../../common/components/VerticalChart/VerticalChart";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { useGetInventoryPartsQuery } from "../../../redux/features/api/inventory";

import {
  TableHeaderForInventory,
  query,
  tableLayout,
} from "./config/constants";
import { NavLink } from "react-router-dom";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";

const Inventory = () => {
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
      <Navbar name="Inventory" />
      <div className="pt-5 pb-2">
        <InventoryStatusGroup />
      </div>

      <div className="bg-solidWhite py-2 px-2">
        <div className="flex justify-between items-center py-4">
          <h1>
            Requisitions
            <span className="bg-shadeOfGray text-solidWhite text-sm rounded-full px-2 ml-2">
              {inventoryData?.length || 0}
            </span>
          </h1>
          <div>
            <NavLink to={"/inventory/request"}>
              <Button className="py-0 !text-shadeOfBlueLight bg-transparent outline">
                See all
              </Button>
            </NavLink>
          </div>
        </div>

        <CommonTable
          headerData={TableHeaderForInventory}
          itemData={inventoryData}
          dataLayout={tableLayout}
          link="/inventory/request-details"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 py-5">
        <div className="">
          <BranchChart
            header="Stock"
            link="/inventory/stock"
            status={[{ label: "Recieved", value: 50 }]}
          />
        </div>
        <div className="">
          <VerticalChart />
        </div>
      </div>
    </div>
  );
};

export default Inventory;

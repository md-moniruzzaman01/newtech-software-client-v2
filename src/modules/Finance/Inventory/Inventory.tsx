import BranchChart from "../../../common/components/BranchChart/BranchChart";
import Button from "../../../common/components/Button";
import InventoryStatusGroup from "../../../common/components/InventoryStatusGroup/InventoryStatusGroup";
import VerticalChart from "../../../common/components/VerticalChart/VerticalChart";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { useGetPostQuery } from "../../../redux/features/api/baseApi";
import { DemoTableHeaderForInventory } from "../../../shared/config/constaints";

import InventoryInfoTable from "./partials/InventoryInfoTable";

const Inventory = () => {
  const { data } = useGetPostQuery({});
  console.log(data);
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
              10
            </span>
          </h1>
          <div>
            <Button className="py-0 !text-shadeOfBlueLight bg-transparent outline">
              See all
            </Button>
          </div>
        </div>
        <InventoryInfoTable HeaderData={DemoTableHeaderForInventory} />
      </div>

      <div className="flex justify-between items-center gap-2">
        <div className="w-1/2  ">
          <BranchChart
            header="Stock"
            link="/inventory/stock"
            status={[{ label: "Recieved", value: 50 }]}
          />
        </div>
        <div className="w-1/2">
          <VerticalChart />
        </div>
      </div>
    </div>
  );
};

export default Inventory;

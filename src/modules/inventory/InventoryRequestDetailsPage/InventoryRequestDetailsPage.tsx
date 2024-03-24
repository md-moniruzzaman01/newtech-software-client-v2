import InventoryRequestCard from "../../../common/components/InventoryRequestCard/InventoryRequestCard";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { RxCross2 } from "react-icons/rx";
import InventoryRequestInfoDetails from "./partials/InventoryRequestInfoDetails";
import { demoHeaderValueForInventoryRequestDetails } from "../../../shared/config/constaints";
import Button from "../../../common/components/Button";

const InventoryRequestDetailsPage = () => {
  return (
    <div className="px-5">
      <Navbar name="Inventory Request Details" />
      <div className="bg-solidWhite my-5">
        <div className="relative">
          <div className=" absolute right-5 top-5">
            <RxCross2 className="text-2xl cursor-pointer" />
          </div>
          <div className="text-center py-4">
            <h2 className="text-2xl font-medium">Request Details</h2>
          </div>
        </div>

        <div className="px-10">
          <h4 className="pb-3">
            <span className="font-medium">Requisitions No : </span>#0514444
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <InventoryRequestCard
              className="bg-lightMistyBlue"
              contact="1245215561"
              designation="Developer"
              header="Engineer Info"
              name="John Doe"
              team="Software Engineer"
            />
            <InventoryRequestCard
              className="bg-lightTurquoise"
              contact="1245215561"
              designation="Developer"
              header="Engineer Info"
              name="John Doe"
              team="Software Engineer"
            />
            <InventoryRequestCard
              className="bg-lightSkyBlue"
              contact="1245215561"
              designation="Developer"
              header="Engineer Info"
              name="John Doe"
              team="Software Engineer"
            />
            <div className="col-span-3 pb-8">
              <InventoryRequestInfoDetails
                headerData={demoHeaderValueForInventoryRequestDetails}
              />
            </div>
            <div className="col-span-3 pb-10">
              <div className="flex justify-around items-center">
                <Button danger className="!py-1">
                  Reject
                </Button>
                <Button className="!py-1 text-lg">Approve</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryRequestDetailsPage;

import { MdModeEdit } from "react-icons/md";
import EngineerItemOrderDetailsTable from "./partials/EngineerItemOrderDetailsTable";
import EngineerItemOrderStatus from "./partials/EngineerItemOrderStatus";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { ComplaintDetails } from "../../../../shared/config/constaints";

const EngineerItemsOrderDetails = () => {
  return (
    <div className="px-5">
      <Navbar name={"Complaint Order Details (Engineer)"} />

      <div className="grid grid-cols-3 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Created Date"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Due Date"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Name"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Branch Address"
          CardInformation={ComplaintDetails}
        />
        <ComplaintDetailsCard
          headerTitle="Billing Address"
          CardInformation={ComplaintDetails}
        />
        <ComplaintDetailsCard
          headerTitle="Invoice Details"
          CardInformation={ComplaintDetails}
        />

        <div className="col-span-2 bg-solidWhite px-5 py-5  relative h-full">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summery</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <EngineerItemOrderDetailsTable />
        </div>

        <div className=" bg-solidWhite px-5 py-5">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <EngineerItemOrderStatus />
        </div>
      </div>
    </div>
  );
};

export default EngineerItemsOrderDetails;

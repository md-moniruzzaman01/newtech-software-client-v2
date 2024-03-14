import DashboardCard from "../../common/components/DashboardCard/DashboardCard";
import Table from "../../common/components/Table/Table";
import Navbar from "../../common/widgets/Navbar/Navbar";
import BufferIcon from "../../shared/libs/custom icons/BufferIcon";
import DeliveryIcon from "../../shared/libs/custom icons/DeliveryIcon";
import InProgress from "../../shared/libs/custom icons/InProgress";
import PendingIcon from "../../shared/libs/custom icons/PendingIcon";
import {
  DemoTableHeaderForDashboard,
  DemoTableValueForDashboard,
} from "./config/constants";

const Dashboard = () => {
  return (
    <div className="px-5">
      <div className="pb-5">
        <Navbar name="Welcome" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <DashboardCard
          title="Pending"
          money="100"
          className="bg-lightSkyBlue"
          icon={<PendingIcon />}
        />
        <DashboardCard
          title="In Progress"
          money="100"
          className="bg-creamyPeach"
          icon={<InProgress />}
        />
        <DashboardCard
          title="Delivery"
          money="100"
          className="bg-mintFrost"
          icon={<DeliveryIcon />}
        />
        <DashboardCard
          title="Buffer"
          money="100"
          className="bg-coralBlush"
          icon={<BufferIcon />}
        />
      </div>
      <div className="bg-solidWhite my-5 p-5 rounded-md">
        <h1 className="font-medium text-xl">Order History</h1>

        <div className="pt-5">
          <Table
            view
            Link="/complaints/order-details"
            itemData={DemoTableValueForDashboard}
            HeaderData={DemoTableHeaderForDashboard}
          ></Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

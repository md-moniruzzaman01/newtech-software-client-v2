import { useEffect, useState } from "react";
import DashboardCard from "../../../common/components/DashboardCard/DashboardCard";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import BufferIcon from "../../../shared/libs/custom icons/BufferIcon";
import DeliveryIcon from "../../../shared/libs/custom icons/DeliveryIcon";
import InProgress from "../../../shared/libs/custom icons/InProgress";
import PendingIcon from "../../../shared/libs/custom icons/PendingIcon";

import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useGetComplaintsQuery } from "../../../redux/features/api/complaints";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { AdminDashboardTableHeader, tableLayout } from "./config/constants";
import Chart from "./partials/Chart";
import BranchChart from "../../../common/components/BranchChart/BranchChart";
import CommonTable from "../../../common/components/Common Table/CommonTable";

const Dashboard = () => {
  const [billData, setBillData] = useState([]);

  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setBillData(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);

  if (complaintsLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="px-5">
      <div className="pb-5">
        <Navbar name="Welcome" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <DashboardCard
          link="/complaints-service?repair_status=Pending"
          title="Pending"
          money="100"
          className="bg-lightSkyBlue"
          icon={<PendingIcon />}
        />
        <DashboardCard
          link="/complaints-service?repair_status=In-Progress"
          title="In Progress"
          money="100"
          className="bg-creamyPeach"
          icon={<InProgress />}
        />
        <DashboardCard
          link="/complaints-service?repair_status=Delivered"
          title="Delivery"
          money="100"
          className="bg-mintFrost"
          icon={<DeliveryIcon />}
        />
        <DashboardCard
          link="/complaints-service?repair_status=buffer"
          title="Buffer"
          money="100"
          className="bg-coralBlush"
          icon={<BufferIcon />}
        />
      </div>
      <div className="grid grid-cols-3 py-5 gap-5">
        <div className="col-span-2  w-full bg-solidWhite  rounded-md ">
          <div className="pb-5 px-5">
            <Chart />
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full ">
            <BranchChart
              link="/branch/order-count"
              status={[{ label: "Recieved", value: 50 }]}
            />
          </div>
        </div>
      </div>
      <div className="bg-solidWhite my-5 p-5 rounded-md">
        <h1 className="font-medium text-xl">Order History</h1>

        <div className="pt-5">
          <CommonTable
            itemData={billData}
            headerData={AdminDashboardTableHeader}
            dataLayout={tableLayout}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

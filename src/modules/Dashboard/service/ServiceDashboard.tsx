import { useEffect, useState } from "react";
import DashboardCard from "../../../common/components/DashboardCard/DashboardCard";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import DeliveryIcon from "../../../shared/libs/custom icons/DeliveryIcon";
import InProgress from "../../../shared/libs/custom icons/InProgress";
import PendingIcon from "../../../shared/libs/custom icons/PendingIcon";

import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useGetComplaintsQuery } from "../../../redux/features/api/complaints";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { AdminDashboardTableHeader, tableLayout } from "./config/constants";
import BranchChart from "../../../common/components/BranchChart/BranchChart";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { useGetCardDataQuery } from "../../../redux/features/api/others";
import Chart from "./partials/chart";
import { icons } from "../../../shared/libs/Icons";

const ServiceDashboard = () => {
  const [billData, setBillData] = useState([]);
  const [CardData, setCardData] = useState({
    pendingCount: 0,
    InProgressCount: 0,
    DeliveredCount: 0,
    BufferCounts: 0,
    BufferCount: 0,
    UnpaidCount: 0,
    RequiredPartsCount: 0,
    RejectCount: 0,
    CompletedCount: 0,
    CancelCount: 0,
    repairfailedCount: 0,
  });

  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });
  const { data, isError, isLoading } = useGetCardDataQuery({
    token,
  });

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setBillData(complaintsData?.data);
    }
    if (!isError && !isLoading) {
      setCardData(data?.data);
    }
  }, [
    complaintsData,
    complaintsLoading,
    complaintsError,
    data,
    isLoading,
    isError,
  ]);

  if (complaintsLoading) {
    return <LoadingPage />;
  }
  console.log(CardData);
  return (
    <div className="px-5">
      <div className="pb-5">
        <Navbar name="Welcome" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <DashboardCard
          link="/complaints-service?repair_status=Pending"
          title="Pending"
          money={`${CardData?.pendingCount}`}
          className="bg-lightSkyBlue"
          icon={<PendingIcon />}
        />
        <DashboardCard
          link="/complaints-service?repair_status=Completed"
          title="Completed"
          money={`${CardData?.CompletedCount}`}
          className="bg-mintFrost"
          icon={<DeliveryIcon />}
        />
        <DashboardCard
          link="/complaints-service?repair_status=In-Progress"
          title="In Progress"
          money={`${CardData?.InProgressCount}`}
          className="bg-creamyPeach"
          icon={<InProgress />}
        />

        <DashboardCard
          link="/complaints-service?repair_status=Delivered"
          title="Delivered"
          money={`${CardData?.DeliveredCount}`}
          className="bg-coralBlush"
          icon={icons?.delivered}
        />

        <DashboardCard
          link="/complaints-service?repair_status=Unpaid"
          title="UnPaid"
          money={`${CardData?.UnpaidCount}`}
          className="bg-VeryLightYellow"
          icon={icons?.unPaid}
        />
        <DashboardCard
          link="/complaints-service?repair_status=repair failed"
          title="Repair Failed"
          money={`${CardData?.repairfailedCount}`}
          className="bg-LightLavender"
          icon={icons?.failed}
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

export default ServiceDashboard;

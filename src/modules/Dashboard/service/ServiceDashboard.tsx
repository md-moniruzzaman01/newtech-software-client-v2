import { useEffect, useState } from "react";
import DashboardCard from "../../../common/components/DashboardCard/DashboardCard";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import DeliveryIcon from "../../../shared/libs/custom icons/DeliveryIcon";
import InProgress from "../../../shared/libs/custom icons/InProgress";
import PendingIcon from "../../../shared/libs/custom icons/PendingIcon";

import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";

import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { useGetCardDataForServiceQuery } from "../../../redux/features/api/others";
import Chart from "./partials/chart";
import { icons } from "../../../shared/libs/Icons";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";
import FullBox from "../../../shared/libs/custom icons/FullBox";
import EngineerCard from "./partials/Engineer Card/EngineerCard";
import CustomerCard from "./partials/Customer Card/CustomerCard";
import ReceiverCard from "./partials/Receiver Card/ReceiverCard";
import QACard from "./partials/QA Card/QACard";
import QCCard from "./partials/QC Card/QCCard";
// import TotalCard from "../../../common/components/TotalCard/TotalCard";

const ServiceDashboard = () => {
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
    TotalComplaintsCount: 0,
  });

  const token = getFromLocalStorage(authKey);

  const { data, isError, isLoading, error } = useGetCardDataForServiceQuery({
    token,
  });

  useEffect(() => {
    if (!isError && !isLoading) {
      setCardData(data?.data);
    }
  }, [data, isLoading, isError]);
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className="px-5">
      <div className="pb-5">
        <Navbar name="Welcome," />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {/* <TotalCard
          data={[
            { label: "Total Complaints", value: 200 },
            { label: "Total Product", value: 200 },
            { label: "Total Repairs", value: 200 },
          ]}
          className="bg-mintFrost"
        /> */}
        <DashboardCard
          link="/complaints-service?repair_status=Pending"
          title="Total Complaints"
          money={`${CardData?.TotalComplaintsCount}`}
          className="bg-LightLavender"
          icon={<FullBox />}
        />
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
          link="/complaints-service?repair_status=In+Progress"
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
          link="/complaints-service?repair_status=Repair+failed"
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
        <div className="col-span-1 bg-solidWhite rounded-md">
          <EngineerCard />
        </div>

        <div className="col-span-1 bg-solidWhite rounded-md">
          <CustomerCard />
        </div>

        <div className="col-span-1 bg-solidWhite rounded-md">
          <ReceiverCard />
        </div>
        <div className="col-span-1 bg-solidWhite rounded-md">
          <QACard />
        </div>
        <div className="col-span-1 bg-solidWhite rounded-md">
          <QCCard />
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;

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
import CommonTable from "../../../common/components/Common Table/CommonTable";
import {
  useGetCardDataQuery,
  useGetDashboardEngineerDataQuery,
  useGetDashboardRecieverQuery,
} from "../../../redux/features/api/others";
import Chart from "./partials/chart";
import { icons } from "../../../shared/libs/Icons";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";
import FullBox from "../../../shared/libs/custom icons/FullBox";
import DashboardEngineerCard from "../../../common/components/Dashboard Engineer Card/DashboardEngineerCard";
// import TotalCard from "../../../common/components/TotalCard/TotalCard";

const WarrantyDashboard = () => {
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
    TotalComplaintsCount: 0,
  });

  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });
  const { data, isError, isLoading, error } = useGetCardDataQuery({
    token,
  });
  const { data: recieverData } = useGetDashboardRecieverQuery({ token });
  const { data: engineerData } = useGetDashboardEngineerDataQuery({ token });
  console.log("Engineer Data", engineerData);
  console.log("reciever", recieverData);

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
    isError,
    isLoading,
    data,
  ]);

  if (isError) {
    return <ErrorShow error={error} />;
  }

  if (complaintsLoading) {
    return <LoadingPage />;
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
          link="/complaints?repair_status=Pending"
          title="Total Complaints"
          money={`${CardData?.TotalComplaintsCount}`}
          className="bg-LightLavender"
          icon={<FullBox />}
        />
        <DashboardCard
          link="/complaints?repair_status=Pending"
          title="Pending"
          money={`${CardData?.pendingCount}`}
          className="bg-lightSkyBlue"
          icon={<PendingIcon />}
        />
        <DashboardCard
          link="/complaints?repair_status=Completed"
          title="Completed"
          money={`${CardData?.CompletedCount}`}
          className="bg-mintFrost"
          icon={<DeliveryIcon />}
        />
        <DashboardCard
          link="/complaints?repair_status=In+Progress"
          title="In Progress"
          money={`${CardData?.InProgressCount}`}
          className="bg-creamyPeach"
          icon={<InProgress />}
        />

        <DashboardCard
          link="/complaints?repair_status=Delivered"
          title="Delivered"
          money={`${CardData?.DeliveredCount}`}
          className="bg-lightTurquoise"
          icon={icons?.delivered}
        />
        <DashboardCard
          link="/complaints?repair_status=buffer"
          title="Buffer"
          money={`${CardData?.BufferCount}`}
          className="bg-LightLavender"
          icon={<BufferIcon />}
        />
        <DashboardCard
          link="/complaints?repair_status=Unpaid"
          title="UnPaid"
          money={`${CardData?.UnpaidCount}`}
          className="bg-VeryLightYellow"
          icon={icons?.unPaid}
        />
        <DashboardCard
          link="/complaints?repair_status=repair failed"
          title="Repair Failed"
          money={`${CardData?.repairfailedCount}`}
          className="bg-coralBlush"
          icon={icons?.failed}
        />
      </div>

      <div className="grid grid-cols-3 py-5 gap-5">
        <div className="col-span-2 w-full bg-solidWhite rounded-md">
          <div className="pb-5 px-5">
            <Chart />
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="bg-solidWhite">
            <h2 className="text-lg font-semibold px-5 pt-5">
              Engineer Details
            </h2>
            <hr className="border-grayForBorder border-2 mt-2 mr-5" />
          </div>
          <div className="w-full h-[calc(100vh-280px)] overflow-y-auto overflow-x-hidden">
            {engineerData?.data?.map((data, index) => (
              <DashboardEngineerCard
                key={index}
                engineer={data.engineer}
                statusCounts={data.statusCounts}
                totalWorked={data.totalWorked}
              />
            ))}
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

export default WarrantyDashboard;

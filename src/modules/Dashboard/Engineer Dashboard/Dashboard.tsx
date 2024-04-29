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
import { EngineerDashboardTableHeader, tableLayout } from "./config/constants";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { useGetEngineersDataQuery } from "../../../redux/features/api/engineers";

const EngineerDashboard = () => {
  const [billData, setBillData] = useState([]);
  const token = getFromLocalStorage(authKey);
  const { data: engineersData, isLoading: engineersIsLoading } =
    useGetEngineersDataQuery({ token });

  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });
  console.log(engineersData);

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setBillData(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);

  if (complaintsLoading || engineersIsLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="px-5">
      <div className="pb-5">
        <Navbar name="Welcome" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <DashboardCard
          link="/service/engineer-items"
          title="Engineer Library"
          money={engineersData?.data?.EngineerLibraryCount}
          className="bg-lightSkyBlue"
          icon={<PendingIcon />}
        />
        <DashboardCard
          link="/service-qa-items"
          title="QA Library"
          money={engineersData?.data?.QaLibrary}
          className="bg-mintFrost"
          icon={<DeliveryIcon />}
        />
        <DashboardCard
          title="Not Repairable"
          money={engineersData?.data?.NotRepairableCount}
          className="bg-creamyPeach"
          icon={<InProgress />}
        />

        <DashboardCard
          title="Rejected"
          money={engineersData?.data?.RejectCount}
          className="bg-coralBlush"
          icon={<BufferIcon />}
        />
        <DashboardCard
          title="Repair Difficulty"
          money={engineersData?.data?.RepairDifficultyCount}
          className="bg-coralBlush"
          icon={<BufferIcon />}
        />
        <DashboardCard
          title="Repaired"
          money={engineersData?.data?.RepairedCount}
          className="bg-coralBlush"
          icon={<BufferIcon />}
        />
        <DashboardCard
          title="Required Parts"
          money={engineersData?.data?.RequiredPartsCount}
          className="bg-coralBlush"
          icon={<BufferIcon />}
        />
      </div>
      <div className="bg-solidWhite my-5 p-5 rounded-md">
        <h1 className="font-medium text-xl">Order History</h1>

        <div className="pt-5">
          <CommonTable
            itemData={billData}
            headerData={EngineerDashboardTableHeader}
            dataLayout={tableLayout}
            link="/complaints/order-details"
          />
        </div>
      </div>
    </div>
  );
};

export default EngineerDashboard;

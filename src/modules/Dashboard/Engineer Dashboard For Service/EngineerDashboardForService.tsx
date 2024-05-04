import { useEffect, useState } from "react";
import DashboardCard from "../../../common/components/DashboardCard/DashboardCard";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useGetComplaintsQuery } from "../../../redux/features/api/complaints";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { EngineerDashboardTableHeader, tableLayout } from "./config/constants";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { useGetEngineerDataForServiceQuery } from "../../../redux/features/api/engineers";
import { icons } from "../../../shared/libs/Icons";

const EngineerDashboardForService = () => {
  const [billData, setBillData] = useState([]);
  const token = getFromLocalStorage(authKey);
  const { data: engineersData, isLoading: engineersIsLoading } =
    useGetEngineerDataForServiceQuery({ token });

  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });
  // console.log(engineersData);

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
          money={engineersData?.data?.QC_OR_Engineer_Library_for_service_Count}
          className="bg-lightShadeOfGreenishYellow"
          icon={icons?.qcLibrary}
        />
        <DashboardCard
          link="/service-qa-items"
          title="QA Library"
          money={engineersData?.data?.QaLibrary}
          className="bg-lightSkyBlue"
          icon={icons?.qcLibrary}
        />
        <DashboardCard
          title="Not Repairable"
          money={engineersData?.data?.NotRepairableCount}
          className="bg-mintFrost"
          icon={icons?.notRepairable}
        />

        <DashboardCard
          title="Rejected"
          money={engineersData?.data?.RejectCount}
          className="bg-coralBlush"
          icon={icons?.cancel}
        />
        <DashboardCard
          title="Repair Difficulty"
          money={engineersData?.data?.RepairDifficultyCount}
          className="bg-LightLavender"
          icon={icons?.difficulty}
        />
        <DashboardCard
          title="Repaired"
          money={engineersData?.data?.RepairedCount}
          className="bg-VeryLightYellow"
          icon={icons?.repaired}
        />
        <DashboardCard
          title="Required Parts"
          money={engineersData?.data?.RequiredPartsCount}
          className="bg-coralBlush"
          icon={icons?.requiredParts}
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

export default EngineerDashboardForService;

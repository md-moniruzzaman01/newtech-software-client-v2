import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";

import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../common/components/RepairCompleteDetails/RepairCompleteDetails";

const AvailableMoney = () => {
  return (
    <div className=" px-5">
      <BranchCommonHeader title="Available Money"></BranchCommonHeader>
      <div className="grid grid-cols-3 gap-3 pt-5  ">
        <RepairCompleteCard
          bgColor="shadeOfGreen"
          headerTitle="Total Repaired"
          branchTitle="0"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="shadeOfBlue"
          headerTitle="Total Repair warranty"
          branchTitle="0"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="shadeOfRed"
          headerTitle="Total Repair Non Warranty"
          branchTitle="0"
        ></RepairCompleteCard>
      </div>
      <div className="w-full grid grid-cols-2 gap-3 py-5 ">
        <RepairCompleteDetails header="Recent Warranty Repairing"></RepairCompleteDetails>
        <RepairCompleteDetails header="Recent Non Warranty Repairing"></RepairCompleteDetails>
      </div>
    </div>
  );
};

export default AvailableMoney;

import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../common/components/RepairCompleteDetails/RepairCompleteDetails";
import { FilterOptions } from "../../../shared/config/constaints";

const TotalRepaired = () => {
  return (
    <div className=" px-5">
      <BranchCommonHeader
        selectItems={FilterOptions}
        title="Total Repaired"
      ></BranchCommonHeader>
      <div className="grid grid-cols-3 gap-3 pt-5  ">
        <RepairCompleteCard
          bgColor="lightGreen"
          headerTitle="Total Repaired"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="lightBlueGreen"
          headerTitle="Total Repair warranty"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="lightBlueColor"
          headerTitle="Total Repair Non Warranty"
          branchTitle="$ 5,500"
        ></RepairCompleteCard>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 py-5 ">
        <RepairCompleteDetails header="Recent Warranty Repairing"></RepairCompleteDetails>
        <RepairCompleteDetails header="Recent Non Warranty Repairing"></RepairCompleteDetails>
      </div>
    </div>
  );
};

export default TotalRepaired;

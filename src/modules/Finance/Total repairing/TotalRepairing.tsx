import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../common/components/RepairCompleteDetails/RepairCompleteDetails";
import { FilterOptions } from "../../../shared/config/constaints";

const TotalRepairing = () => {
  return (
    <div className=" px-5">
      <BranchCommonHeader
        selectItems={FilterOptions}
        title="Total Repairing"
      ></BranchCommonHeader>
      <div className="grid grid-cols-3 gap-3 pt-5  ">
        <RepairCompleteCard
          bgColor="lightSky"
          headerTitle="Total Repairing"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="darkBlue"
          headerTitle="Total Repair warranty"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="darkYellow"
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

export default TotalRepairing;

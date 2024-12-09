import BranchCommonHeader from "../../../../common/components/BranchCommonHeader/BranchCommonHeader";
import RepairCompleteCard from "../../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../../common/components/RepairCompleteDetails/RepairCompleteDetails";
import { FilterOptions } from "../../../../shared/config/constaints";

const RepairComplete = () => {
  return (
    <div className=" px-5">
      <BranchCommonHeader
        selectItems={FilterOptions}
        title="Repair Complete"
      ></BranchCommonHeader>
      <div className="grid grid-cols-3 gap-3 pt-5 ">
        <RepairCompleteCard
          bgColor="primary"
          headerTitle="Total Repair Complete"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="lightBlue"
          headerTitle="Total Repair Delivered"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="lightYellow"
          headerTitle="Total Repair Income"
          branchTitle="$ 5,500"
        ></RepairCompleteCard>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 py-5 ">
        <RepairCompleteDetails header="Recent Delivered"></RepairCompleteDetails>
        <RepairCompleteDetails header="Recent Complete"></RepairCompleteDetails>
        <RepairCompleteDetails header="Income"></RepairCompleteDetails>
        <RepairCompleteDetails header="Withdraw"></RepairCompleteDetails>
      </div>
    </div>
  );
};

export default RepairComplete;

import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../common/components/RepairCompleteDetails/RepairCompleteDetails";
import { FilterOptions } from "../../../shared/config/constaints";

const AvailableMoney = () => {
  return (
    <div className=" px-5">
      <BranchCommonHeader
        selectItems={FilterOptions}
        title="Available Money"
      ></BranchCommonHeader>
      <div className="grid grid-cols-3 gap-3 pt-5  ">
        <RepairCompleteCard
          bgColor="shadeOfGreen"
          headerTitle="Total Repaired"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="shadeOfBlue"
          headerTitle="Total Repair warranty"
          branchTitle="25"
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="shadeOfRed"
          headerTitle="Total Repair Non Warranty"
          branchTitle="$ 5,500"
        ></RepairCompleteCard>
      </div>
      <div className="w-full grid grid-cols-2 gap-3 py-5 ">
        <RepairCompleteDetails
          header="Recent Warranty Repairing"
          branch1="Branch 1"
          branch2="Branch 2"
          branch3="Branch 3"
          branch4="Branch 4"
          branch5="Branch 5"
          branchData1="02"
          branchData2="02"
          branchData3="02"
          branchData4="02"
          branchData5="02"
        ></RepairCompleteDetails>
        <RepairCompleteDetails
          header="Recent Non Warranty Repairing"
          branch1="Branch 1"
          branch2="Branch 2"
          branch3="Branch 3"
          branch4="Branch 4"
          branch5="Branch 5"
          branchData1="02"
          branchData2="02"
          branchData3="02"
          branchData4="02"
          branchData5="02"
        ></RepairCompleteDetails>
      </div>
    </div>
  );
};

export default AvailableMoney;

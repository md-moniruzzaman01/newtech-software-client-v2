import BranchHeader from "../common/components/BranchHeader/BranchHeader";
import RepairCompleteCard from "../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../common/components/RepairCompleteDetails/RepairCompleteDetails";
import SideBar from "../common/widgets/SideBar/SideBar";

const TotalRepairing = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1">
        <BranchHeader name="Total Repairing"></BranchHeader>
        <div className="grid grid-cols-3  pt-5 px-[50px] ">
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
        <div className="w-full grid grid-cols-2 gap-4 py-5 px-[58px]">
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
    </div>
  );
};

export default TotalRepairing;

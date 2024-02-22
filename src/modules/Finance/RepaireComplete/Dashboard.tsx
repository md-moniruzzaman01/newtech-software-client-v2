import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../common/components/RepairCompleteDetails/RepairCompleteDetails";
import SideBar from "../../../common/widgets/SideBar/SideBar";
import { FilterOptions } from "../../../shared/config/constaints";

const RepairComplete = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 px-5">
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
          <RepairCompleteDetails
            header="Recent Delivered"
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
            header="Recent Complete"
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
            header="Income"
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
            header="Withdraw"
            branch1="Branch 1"
            branch2="Branch 2"
            branch3="Branch 3"
            branch4="Branch 4"
            branch5="Branch 5"
            branchData1="1,00,000.00"
            branchData2="50,000.00"
            branchData3="30,000.00"
            branchData4="70,000.00"
            branchData5="20,000.00"
          ></RepairCompleteDetails>
        </div>
      </div>
    </div>
  );
};

export default RepairComplete;

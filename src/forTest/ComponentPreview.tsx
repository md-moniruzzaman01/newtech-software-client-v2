import BranchCard from "../common/components/BranchCard/BranchCard";
import BranchChart from "../common/components/BranchChart/BranchChart";
import BranchHeader from "../common/components/BranchHeader/BranchHeader";
import ComplaintServiceCard from "../common/components/ComplaintServiceViewCard/ComplaintServiceCard";
import Filter from "../common/components/Filter/Filter";
import RepairCompleteCard from "../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../common/components/RepairCompleteDetails/RepairCompleteDetails";
import SearchBar from "../common/components/SearchBar/SearchBar";
import Table from "../common/components/Table/Table";
import Navbar from "../common/widgets/Navbar/Navbar";
import Pagination from "../common/widgets/Pagination/Pagination";
import SideBar from "../common/widgets/SideBar/SideBar";

const ComponentPreview = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1">
        <Navbar name="Component Preview"></Navbar>
        <Filter></Filter>
        <SearchBar></SearchBar>
        <BranchCard
          bgColor="primary"
          branchTitle="Branch Title"
          color="yellow"
          details="Branch Details"
          headerTitle="Branch Header"
          price="5500"
        ></BranchCard>
        <BranchHeader name="Branch Header"></BranchHeader>
        <BranchChart></BranchChart>

        <RepairCompleteCard
          bgColor="primary"
          branchTitle="Repair Title"
          color="yellow"
          headerTitle="Repair Header Title"
          isProduct={true}
          isWithdraw={true}
        ></RepairCompleteCard>

        <ComplaintServiceCard
          details="Complaint Service"
          styleCol="col-span-2"
          title="Complaint Service Card"
        ></ComplaintServiceCard>

        <RepairCompleteDetails
          branch1="Branch 1"
          branch2="Branch 2"
          branch3="Branch 3"
          branch4="Branch 4"
          branch5="Branch 5"
          branchData1="1"
          branchData2="2"
          branchData3="3"
          branchData4="4"
          branchData5="5"
          header="Repair Complete Details"
        ></RepairCompleteDetails>

        <Table></Table>

        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default ComponentPreview;

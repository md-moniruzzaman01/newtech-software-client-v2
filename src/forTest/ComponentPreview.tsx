import BranchCard from "../common/components/BranchCard/BranchCard";
import BranchChart from "../common/components/BranchChart/BranchChart";
import ComplaintDetailsCard from "../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import ComplaintHeaderCard from "../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintServiceCard from "../common/components/ComplaintServiceViewCard/ComplaintServiceCard";
import Input from "../common/components/Input/Input";
import InputFilter from "../common/components/InputFilter/InputFilter";
import RepairCompleteCard from "../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../common/components/RepairCompleteDetails/RepairCompleteDetails";
import SearchBar from "../common/components/SearchBar/SearchBar";
import Table from "../common/components/Table/Table";
import TextArea from "../common/components/TextArea/TextArea";
import UserProfile from "../common/components/UserProfile/UserProfile";
import Navbar from "../common/widgets/Navbar/Navbar";
import Pagination from "../common/widgets/Pagination/Pagination";
import SideBar from "../common/widgets/SideBar/SideBar";
import {
  ComplaintDetails,
  DemoTableHeader,
  DemoTableValue,
  FilterOptions2,
} from "../shared/config/constaints";
import userImg from "../../src/assets/user.jpg";
import StatusGroup from "../common/components/Status Group";
import BranchCommonHeader from "../common/components/BranchCommonHeader/BranchCommonHeader";

const ComponentPreview = () => {
  return (
    <div className="flex space-y-8">
      <SideBar></SideBar>
      <div className="flex-1">
        <Navbar name="Component Preview"></Navbar>
        <StatusGroup></StatusGroup>
        <SearchBar></SearchBar>

        <BranchCommonHeader
          selectItems={FilterOptions2}
          title="hello"
        ></BranchCommonHeader>

        <BranchCard
          bgColor="primary"
          branchTitle="Branch Title"
          color="yellow"
          details="Branch Details"
          headerTitle="Branch Header"
          price="5500"
        ></BranchCard>
        <BranchChart status={[{ label: "Recieved", value: 50 }]}></BranchChart>
        <ComplaintDetailsCard Cardinfo={ComplaintDetails} />
        <RepairCompleteCard
          bgColor="primary"
          branchTitle="Repair Title"
          color="yellow"
          headerTitle="Repair Header Title"
          isProduct={true}
          isWithdraw={true}
        ></RepairCompleteCard>

        <Input
          inputName="name"
          inputPlaceholder="Write Your Name..."
          inputType="text"
          labelName="Your Name"
        ></Input>

        <InputFilter label="Select" Filter={FilterOptions2}></InputFilter>

        <TextArea
          name="hello"
          label="Text Area"
          placeholder="bye bye"
        ></TextArea>

        <ComplaintServiceCard
          details="Complaint Service"
          styleCol="col-span-2"
          title="Complaint Service Card"
        ></ComplaintServiceCard>

        <UserProfile
          userDepartment="Software
          Development"
          userDesignation="Frontend Developer"
          userEmail="fahimkhandakar01@gmail.com"
          userId="23232"
          userImg={userImg}
          userJoinedDate="20/01/24"
          userName="Fahim Khandakar"
          userPhone={+8801903994195}
        ></UserProfile>

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

        <ComplaintHeaderCard
          bgColor="primary"
          headerDetails="hello"
          color="yellow"
          headerTitle="hello "
        ></ComplaintHeaderCard>

        <Table HeaderData={DemoTableHeader} itemData={DemoTableValue}></Table>

        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default ComponentPreview;

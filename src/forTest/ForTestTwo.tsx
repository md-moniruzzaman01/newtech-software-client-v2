import BranchCard from "../common/components/BranchCard/BranchCard";
import BranchHeader from "../common/components/BranchHeader/BranchHeader";
import SideBar from "../common/widgets/SideBar/SideBar";

const ForTestTwo = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <BranchHeader name={"Branch"}></BranchHeader>
        <div className="grid grid-cols-3  pt-5 px-[50px] ">
          <BranchCard
            bgColor="primary"
            branchTitle="Repair Complete"
            headerTitle="Repair Complete"
            details="Amount Reparing in branch"
            price="5,500"
          ></BranchCard>
          <BranchCard
            bgColor="lightBlue"
            branchTitle="Repair Complete"
            headerTitle="Repair Complete"
            details="Amount Reparing in branch"
            price="5,500"
          ></BranchCard>
          <BranchCard
            bgColor="lightYellow"
            branchTitle="Repair Complete"
            headerTitle="Repair Complete"
            details="Amount Reparing in branch"
            price="5,600"
          ></BranchCard>
          <BranchCard
            bgColor="darkYellow"
            branchTitle="Repair Complete"
            headerTitle="Repair Complete"
            details="Amount Reparing in branch"
            price="5,500"
          ></BranchCard>
          <BranchCard
            bgColor="lightCyan"
            branchTitle="Repair Complete"
            headerTitle="Repair Complete"
            details="Amount Reparing in branch"
            price="5,500"
          ></BranchCard>
          <BranchCard
            bgColor="lightOlive"
            branchTitle="Repair Complete"
            headerTitle="Repair Complete"
            details="Amount Reparing in branch"
            price="5,500"
          ></BranchCard>
        </div>
      </div>
    </div>
  );
};

export default ForTestTwo;

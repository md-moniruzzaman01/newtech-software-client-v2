import { useState } from "react";
import BranchCard from "../../../common/components/BranchCard/BranchCard";
import BranchChart from "../../../common/components/BranchChart/BranchChart";
import BranchHeader from "./partials/BranchHeader";

const Branch = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  console.log(selectedBranch);
  return (
    <div className="px-5">
      <BranchHeader />

      <div className="grid grid-cols-3 gap-2  pt-3 ">
        <BranchCard
          bgColor="primary"
          branchTitle="Repair Complete"
          headerTitle="Repair Complete"
          details="Amount Reparing in branch"
          price="5,500"
          link="/branch/repair-complete"
        ></BranchCard>
        <BranchCard
          bgColor="lightBlue"
          branchTitle="Total Reparing"
          headerTitle="Total Reparing"
          details="Amount Reparing in branch"
          price="5,500"
          link="/branch/total-repairing"
        ></BranchCard>
        <BranchCard
          bgColor="lightYellow"
          branchTitle="Total Repaired"
          headerTitle="Total Repaired"
          details="Amount Reparing in branch"
          price="5,600"
          link="/branch/total-repaired"
        ></BranchCard>
        <BranchCard
          bgColor="darkYellow"
          branchTitle="Repair Complete"
          headerTitle="Available Money"
          details="Amount Reparing in branch"
          price="5,500"
          link="/branch/available-money"
        ></BranchCard>
        <BranchCard
          bgColor="lightCyan"
          branchTitle="Repair Complete"
          headerTitle="Discount Amount"
          details="Amount Reparing in branch"
          price="5,500"
          link="/branch/discount-amount"
        ></BranchCard>
        <BranchCard
          bgColor="lightOlive"
          branchTitle="Repair Complete"
          headerTitle="Withdraw"
          details="Amount Reparing in branch"
          price="5,500"
          link="/branch/withdraw"
        ></BranchCard>
      </div>
      <div className="w-full mt-5">
        <BranchChart
          link="/branch/order-count"
          status={[{ label: "Recieved", value: 50 }]}
        ></BranchChart>
      </div>
    </div>
  );
};

export default Branch;

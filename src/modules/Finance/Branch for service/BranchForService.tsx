import { useState } from "react";
import BranchCard from "../../../common/components/BranchCard/BranchCard";
import BranchChart from "../../../common/components/BranchChart/BranchChart";
import BranchHeader from "./partials/BranchHeader";
import { authKey, branches } from "../../../shared/config/constaints";
import { useGetBranchesForServiceQuery } from "../../../redux/features/api/branch";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { getUserInfo } from "../../../services/auth.service";

const BranchForService = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const token = getFromLocalStorage(authKey);
  const selectBranch = branches?.find((item) => item?.value === selectedBranch);
  const user = getUserInfo();
  const id = selectBranch?.id || user?.branch || "05";

  const { data } = useGetBranchesForServiceQuery({ id, token });
  console.log("data", data);
  return (
    <div className="px-5">
      <BranchHeader setSelectedBranch={setSelectedBranch} defaultValue={id} />

      <div className="grid grid-cols-3 gap-2  pt-3 ">
        <BranchCard
          bgColor="primary"
          branchTitle="Total Delivered"
          count={data?.data?.BillData?.[0]?.totalDelivered || 0}
          headerTitle="Bill Information"
          details="Total Pending"
          price={data?.data?.BillData?.[0]?.totalPeinding || 0}
          link="/branch/repair-complete"
        ></BranchCard>
        <BranchCard
          bgColor="lightBlue"
          branchTitle="Total Money Available"
          headerTitle="Branch Information"
          count={
            data?.data?.RepairingComplaintmoneyInBranch?.[0]
              ?.totalMoneyAvailable || 0
          }
          link="/branch/total-repairing"
        ></BranchCard>
        <BranchCard
          bgColor="lightYellow"
          branchTitle="Total Delivered"
          headerTitle="Repair Status"
          count={data?.data?.repairStatusMetrics?.[3]?.count || 0}
          details="Total Money"
          price={data?.data?.repairStatusMetrics?.[3]?.totalMoney || 0}
          link="/branch/total-repaired"
        ></BranchCard>
        <BranchCard
          bgColor="darkYellow"
          branchTitle="Total Deposit"
          headerTitle="Transaction Details"
          details="Total Withdraw"
          price={data?.data?.transactionData?.[0]?.totalWithdrawal || 0}
          count={data?.data?.transactionData?.[0]?.totalDeposit || 0}
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

export default BranchForService;

import { useState } from "react";
import BranchCard from "../../../common/components/BranchCard/BranchCard";
import BranchChart from "../../../common/components/BranchChart/BranchChart";
import BranchHeader from "./partials/BranchHeader";
import { authKey, branches } from "../../../shared/config/constaints";
import { useGetBranchesQuery } from "../../../redux/features/api/branch";
import { getUserInfo } from "../../../services/auth.service";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";

const Branch = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const selectBranch = branches?.find((item) => item?.value === selectedBranch);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();
  const id = selectBranch?.id || user?.branch || "05";
  // const color = [
  //   "primary",
  //   "lightBlue",
  //   "lightYellow",
  //   "darkYellow",
  //   "lightCyan",
  //   "lightOlive",
  // "darkYellow"
  // ];
  const { data, isLoading } = useGetBranchesQuery({ id, token });
  if (isLoading) {
    return <LoadingPage />;
  }
  console.log("data", data?.data);
  return (
    <div className="px-5">
      <BranchHeader setSelectedBranch={setSelectedBranch} />

      <div className="grid grid-cols-3 gap-2  pt-3 ">
        <BranchCard
          bgColor="primary"
          branchTitle="Total Delivered"
          count={data?.data?.BillData?.[0]?.totalDelivered}
          headerTitle="Bill Information"
          details="Total Pending"
          price={data?.data?.BillData?.[0]?.totalPeinding}
          link="/branch/repair-complete"
        />

        <BranchCard
          bgColor="lightBlue"
          branchTitle="Total Money Available"
          headerTitle="Branch Information"
          count={
            data?.data?.RepairingComplaintmoneyInBranch?.[0]
              ?.totalMoneyAvailable
          }
          link="/branch/total-repairing"
        />

        <BranchCard
          bgColor="lightYellow"
          branchTitle="Total Repaired"
          headerTitle="Repair Status"
          count={data?.data?.repairStatusMetrics?.[0]?.count}
          details="Total Money"
          price={data?.data?.repairStatusMetrics?.[0]?.totalMoney}
          link="/branch/total-repaired"
        />

        <BranchCard
          bgColor="darkYellow"
          branchTitle="Total Deposit"
          headerTitle="Transaction Details"
          details="Total Withdraw"
          price={data?.data?.transactionData?.[0]?.totalWithdrawal}
          count={data?.data?.transactionData?.[0]?.totalDeposit}
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

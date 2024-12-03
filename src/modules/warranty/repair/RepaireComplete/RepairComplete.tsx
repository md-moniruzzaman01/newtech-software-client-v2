/* eslint-disable @typescript-eslint/no-explicit-any */
import BranchCommonHeader from "../../../../common/components/BranchCommonHeader/BranchCommonHeader";
import RepairCompleteCard from "../../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../../common/components/RepairCompleteDetails/RepairCompleteDetails";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useGetBillsQuery } from "../../../../redux/features/api/bill";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { useGetWithdrawQuery } from "../../../../redux/features/api/withdraw";

const RepairComplete = () => {
  const token = getFromLocalStorage(authKey);

  const { data: withdrawData, isLoading: withdrawLoading } =
    useGetWithdrawQuery({
      token,
    });

  const {
    data: billData,
    error,
    isError: billsError,
    isLoading: billsLoading,
    isFetching,
  } = useGetBillsQuery({
    token,
  });

  const recentDelivered = billData?.data
    ?.filter(
      (item) =>
        item?.status === "Delivered Without Payment" ||
        item.status === "Delivered"
    )
    ?.slice(0, 5);

  const recentWithdraw = withdrawData?.data
    ?.filter((item) => item?.type === "withdraw")
    ?.slice(0, 5);

  const recentCompleted = billData?.data
    ?.filter((item) => item?.status === "Completed")
    ?.slice(0, 5);

  const recentIncome = billData?.data
    ?.filter((item) => item?.status === "Delivered")
    ?.slice(0, 5);

  if (billsError) {
    return <ErrorShow error={error} />;
  }

  if (billsLoading || isFetching || withdrawLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" px-5">
      <BranchCommonHeader title="Bill Information" />
      <div className="grid grid-cols-3 gap-3 pt-5 ">
        <RepairCompleteCard
          bgColor="primary"
          headerTitle="Total Completed"
          branchTitle={"0"}
        />
        <RepairCompleteCard
          bgColor="lightBlue"
          headerTitle="Total Delivered"
          branchTitle={"0"}
        />
        <RepairCompleteCard
          bgColor="lightYellow"
          headerTitle="Total Income"
          branchTitle="0"
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-4 py-5 ">
        <RepairCompleteDetails
          header="Recent Delivered"
          data={recentDelivered}
          title="item?.branch"
          info={"item?.id"}
          link={"/bill-list-service?searchTerm="}
        />
        <RepairCompleteDetails
          header="Recent Completed"
          data={recentCompleted}
          title="item?.branch"
          info={"item?.total_amount"}
          link={"/bill-list-service?searchTerm="}
        />
        <RepairCompleteDetails
          header="Recent Income"
          data={recentIncome}
          title="item?.customer?.name"
          info={"item?.total_paid"}
          link={"/bill-list-service?searchTerm="}
        />
        <RepairCompleteDetails
          header="Withdraw"
          data={recentWithdraw}
          title="item?.branch"
          info={"item?.amount"}
        ></RepairCompleteDetails>
      </div>
    </div>
  );
};

export default RepairComplete;

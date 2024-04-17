/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import BranchCommonHeader from "../../../../common/components/BranchCommonHeader/BranchCommonHeader";
import RepairCompleteCard from "../../../../common/components/RepairCompleteCard/RepairCompleteCard";
import RepairCompleteDetails from "../../../../common/components/RepairCompleteDetails/RepairCompleteDetails";
import { useGetServicesQuery } from "../../../../redux/features/api/service";
import { FilterOptions } from "../../../../shared/config/constaints";

const RepairComplete = () => {
  const [complaintsData, setComplaintsData] = useState([]);
  const [complaintsDataDelivered, setComplaintsDataDelivered] = useState([]);
  const { data: complaints, isError, isLoading } = useGetServicesQuery({});

  useEffect(() => {
    if (!isError && !isLoading) {
      const completedComplaints = complaints?.data.filter(
        (complaint: any) => complaint.repair_status === "Reject"
      );
      const deliveredComplaints = complaints?.data.filter(
        (complaint: any) => complaint.repair_status === "Delivered"
      );
      setComplaintsData(completedComplaints);
      setComplaintsDataDelivered(deliveredComplaints);
    }
  }, [isError, isLoading, complaints]);

  const totalRepairComplete =
    complaintsData?.reduce(
      (pre, curr) => pre + (curr?.RepairItem?.length ?? 0),
      0
    ) || 0;
  const totalRepairDelivered =
    complaintsDataDelivered?.reduce(
      (pre, curr) => pre + (curr?.RepairItem?.length ?? 0),
      0
    ) || 0;

  console.log(complaintsData);

  return (
    <div className=" px-5">
      <BranchCommonHeader
        selectItems={FilterOptions}
        title="Repair Complete"
      ></BranchCommonHeader>
      <div className="grid grid-cols-3 gap-3 pt-5 ">
        <RepairCompleteCard
          bgColor="primary"
          headerTitle="Total Repair Complete"
          branchTitle={totalRepairComplete}
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="lightBlue"
          headerTitle="Total Repair Delivered"
          branchTitle={totalRepairDelivered}
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
  );
};

export default RepairComplete;

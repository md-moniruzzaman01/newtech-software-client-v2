import { useParams } from "react-router-dom";
import { ComplaintsOrderDetailsProps } from "./config/types";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetComplaintByIdQuery } from "../../../../redux/features/api/complaints";

const ComplaintsInDetails = () => {
  const { id } = useParams();
  const [complaintsSingleData, setComplaintsSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintByIdQuery({ id, token });
  useEffect(() => {
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data);
    }
  }, [complaintsData, complaintsError, complaintsLoading]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Complaint Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Order Information</h2>
          <p>
            <span className="font-bold">Order Number:</span>{" "}
            {complaintsSingleData?.order_number || null}
          </p>
          <p>
            <span className="font-bold">Branch:</span>{" "}
            {complaintsSingleData?.branch}
          </p>
          <p>
            <span className="font-bold">Brand Name:</span>{" "}
            {complaintsSingleData?.brand_name}
          </p>
          <p>
            <span className="font-bold">Category Name:</span>{" "}
            {complaintsSingleData?.category_name}
          </p>
          <p>
            <span className="font-bold">Received Date:</span>{" "}
            {new Date(
              complaintsSingleData?.received_date
            )?.toLocaleDateString()}
          </p>
          <p>
            <span className="font-bold">Turnaround Time:</span>{" "}
            {new Date(
              complaintsSingleData?.turnaround_time
            )?.toLocaleDateString()}
          </p>
          <p>
            <span className="font-bold">Receiver:</span>{" "}
            {complaintsSingleData?.receiver}
          </p>
          <p>
            <span className="font-bold">Repair Status:</span>{" "}
            {complaintsSingleData?.repair_status}
          </p>
          <p>
            <span className="font-bold">Total Charge:</span>{" "}
            {complaintsSingleData?.total_charge}
          </p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Customer Information</h2>
          <p>
            <span className="font-bold">Name:</span>{" "}
            {complaintsSingleData?.customer?.contact_person ||
              complaintsSingleData?.Nonwarrentycustomer?.name}
          </p>
          <p>
            <span className="font-bold">Contact Number:</span>{" "}
            {complaintsSingleData?.customer?.contactNo ||
              complaintsSingleData?.Nonwarrentycustomer?.contact_number}
          </p>
        </div>
      </div>

      <div className="border rounded-lg p-4 mt-8">
        <h2 className="text-xl font-bold mb-2">Products Information</h2>
        <p>
          <span className="font-bold">Model Number:</span>{" "}
          {complaintsSingleData?.products?.model_number}
        </p>
        <p>
          <span className="font-bold">Serial Number:</span>{" "}
          {complaintsSingleData?.products?.serial_number}
        </p>
        <p>
          <span className="font-bold">Repair Count:</span>{" "}
          {complaintsSingleData?.products?.repair_count}
        </p>
        <p>
          <span className="font-bold">Repair Status:</span>{" "}
          {complaintsSingleData?.products?.repair_status}
        </p>
      </div>

      <div className="border rounded-lg p-4 mt-8">
        <h2 className="text-xl font-bold mb-2">Complaints</h2>
        <p>
          <span className="font-bold">Qa:</span>{" "}
          {complaintsSingleData?.Qa?.length}
        </p>
        <p>
          <span className="font-bold">Qc:</span>{" "}
          {complaintsSingleData?.Qc?.length}
        </p>
        <p>
          <span className="font-bold">Repair Item:</span>{" "}
          {complaintsSingleData?.RepairItem?.length}
        </p>
      </div>
    </div>
  );
};

export default ComplaintsInDetails;

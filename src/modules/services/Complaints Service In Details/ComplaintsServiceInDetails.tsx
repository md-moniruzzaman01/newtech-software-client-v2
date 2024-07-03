import { useParams } from "react-router-dom";
import { ComplaintsOrderDetailsProps } from "./config/types";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useGetServicesByIdQuery } from "../../../redux/features/api/service";
import {
  FaInfoCircle,
  FaUser,
  FaBoxOpen,
  FaExclamationCircle,
  FaWrench,
  FaClipboardCheck,
} from "react-icons/fa";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";

const ComplaintsServiceInDetails = () => {
  const { id } = useParams();
  const [complaintsSingleData, setComplaintsSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetServicesByIdQuery({ id, token });
  useEffect(() => {
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data);
    }
  }, [complaintsData, complaintsError, complaintsLoading]);

  if (complaintsLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-600">
        Complaint Details
      </h1>

      {/* order information  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
            <FaInfoCircle className="mr-2" /> Order Information
          </h2>
          <div className="grid grid-cols-2 gap-x-3">
            <p className="mb-2">
              <span className="font-bold text-gray-700">Order Number:</span>{" "}
              {complaintsSingleData?.order_number || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold text-gray-700">Branch:</span>{" "}
              {complaintsSingleData?.branch || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold text-gray-700">Brand Name:</span>{" "}
              {complaintsSingleData?.brand_name || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold text-gray-700">Category Name:</span>{" "}
              {complaintsSingleData?.category_name || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold text-gray-700">Received Date:</span>{" "}
              {complaintsSingleData?.received_date
                ? new Date(
                    complaintsSingleData.received_date
                  ).toLocaleDateString()
                : "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold text-gray-700">Turnaround Time:</span>{" "}
              {complaintsSingleData?.turnaround_time
                ? new Date(
                    complaintsSingleData.turnaround_time
                  ).toLocaleDateString()
                : "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold text-gray-700">Receiver:</span>{" "}
              {complaintsSingleData?.receiver || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold text-gray-700">Repair Status:</span>{" "}
              {complaintsSingleData?.repair_status || "N/A"}
            </p>
            <p>
              <span className="font-bold text-gray-700">Total Charge:</span>{" "}
              {complaintsSingleData?.total_charge || "N/A"}
            </p>
          </div>
        </div>

        {/* customer information  */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
            <FaUser className="mr-2" /> Customer Information
          </h2>
          <p className="mb-2">
            <span className="font-bold text-gray-700">Name:</span>{" "}
            {complaintsSingleData?.customer?.contact_person ||
              complaintsSingleData?.Nonwarrentycustomer?.name ||
              "N/A"}
          </p>
          <p>
            <span className="font-bold text-gray-700">Contact Number:</span>{" "}
            {complaintsSingleData?.customer?.contactNo ||
              complaintsSingleData?.Nonwarrentycustomer?.contact_number ||
              "N/A"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* product information  */}
        <div className="bg-white  shadow-lg rounded-lg p-6 mt-10 border-t-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600 flex items-center">
            <FaBoxOpen className="mr-2" /> Products Information
          </h2>
          <p className="mb-2">
            <span className="font-bold text-gray-700">Model Number:</span>{" "}
            {complaintsSingleData?.products?.model_number || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-bold text-gray-700">Serial Number:</span>{" "}
            {complaintsSingleData?.products?.serial_number || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-bold text-gray-700">Repair Count:</span>{" "}
            {complaintsSingleData?.products?.repair_count || "N/A"}
          </p>
          <p>
            <span className="font-bold text-gray-700">Repair Status:</span>{" "}
            {complaintsSingleData?.products?.repair_status || "N/A"}
          </p>
        </div>

        {/* complaints information  */}
        <div className="bg-white col-span-2 shadow-lg rounded-lg p-6 mt-2 border-t-4 border-red-500">
          <h2 className="text-2xl font-semibold mb-4 text-red-600 flex items-center">
            <FaExclamationCircle className="mr-2" /> Complaints
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-800">
                <FaClipboardCheck className="mr-2" /> QA
              </h3>
              {complaintsSingleData?.Qa?.length > 0 ? (
                complaintsSingleData.Qa.map((qa, index) => (
                  <div key={index} className="mb-2">
                    <p>
                      <span className="font-bold text-gray-700">ID:</span>{" "}
                      {qa.id || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Branch:</span>{" "}
                      {qa.branch || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Engineer:</span>{" "}
                      {qa?.qa_checker_id.Engineer?.name?.firstName +
                        " " +
                        qa?.qa_checker_id.Engineer?.name?.middleName +
                        " " +
                        qa?.qa_checker_id.Engineer?.name?.lastName || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Status:</span>{" "}
                      {qa.status || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Date:</span>{" "}
                      {new Date(qa.updatedAt)?.toLocaleDateString() || "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No QA data available</p>
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-800">
                <FaClipboardCheck className="mr-2" /> QC
              </h3>
              {complaintsSingleData?.Qc?.length > 0 ? (
                complaintsSingleData.Qc.map((qc, index) => (
                  <div key={index} className="mb-2">
                    <p>
                      <span className="font-bold text-gray-700">ID:</span>{" "}
                      {qc.id || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Engineer:</span>{" "}
                      {qc?.qc_checker_id.Engineer?.name?.firstName +
                        " " +
                        qc?.qc_checker_id.Engineer?.name?.middleName +
                        " " +
                        qc?.qc_checker_id.Engineer?.name?.lastName || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Status:</span>{" "}
                      {qc.status || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Date:</span>{" "}
                      {new Date(qc.updatedAt)?.toLocaleDateString() || "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No QC data available</p>
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-800">
                <FaWrench className="mr-2" /> Repair Items
              </h3>
              {complaintsSingleData?.RepairItem?.length > 0 ? (
                complaintsSingleData.RepairItem.map((repairItem, index) => (
                  <div key={index} className="mb-2">
                    <p>
                      <span className="font-bold text-gray-700">ID:</span>{" "}
                      {repairItem.id || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Engineer:</span>{" "}
                      {repairItem.engineer?.Engineer?.name?.firstName +
                        " " +
                        repairItem.engineer?.Engineer?.name?.middleName +
                        " " +
                        repairItem.engineer?.Engineer?.name?.lastName || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Status:</span>{" "}
                      {repairItem.status || "N/A"}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Date:</span>{" "}
                      {new Date(repairItem.updatedAt)?.toLocaleDateString() ||
                        "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No Repair Item data available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsServiceInDetails;

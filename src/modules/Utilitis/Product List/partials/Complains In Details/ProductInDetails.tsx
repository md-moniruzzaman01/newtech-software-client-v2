import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { useGetProductByIdQuery } from "../../../../../redux/features/api/complaints";
import LoadingPage from "../../../../../common/components/LoadingPage/LoadingPage";

const ProductInDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [complaintsSingleData, setComplaintsSingleData] = useState<any | null>(
    null
  );
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetProductByIdQuery({ id, token });
  useEffect(() => {
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data);
    }
  }, [complaintsData, complaintsError, complaintsLoading]);

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  console.log(complaintsSingleData);
  return (
    <div className="border p-4">
      <h2 className="text-xl font-semibold mb-4">Repair Details</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          {/* Serial Number */}
          <div className="border p-3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Serial Number</h3>
            <p>{complaintsSingleData?.serial_number}</p>
          </div>
          {/* Repair Details */}
          <div className="border p-3">
            <h3 className="text-lg font-semibold mb-2">Repair Details</h3>
            <ul>
              <li>
                <strong>Repair ID:</strong> {complaintsSingleData?.repair[0].id}
              </li>
              <li>
                <strong>RMA:</strong> {complaintsSingleData?.repair[0].rma}
              </li>
              <li>
                <strong>Status:</strong>{" "}
                {complaintsSingleData?.repair[0].status}
              </li>
              {/* Add more details here */}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Customer Details */}
          <div className="border p-3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Customer Details</h3>
            <ul>
              <li>
                <strong>ID:</strong> {complaintsSingleData?.customer}
              </li>
              <li>
                <strong>Order Number:</strong>{" "}
                {complaintsSingleData?.order_number}
              </li>
              <li>
                <strong>Receiver:</strong> {complaintsSingleData?.receiver}
              </li>
              {/* Add more customer details here */}
            </ul>
          </div>
          {/* Repair Item Details */}
          <div className="border p-3">
            <h3 className="text-lg font-semibold mb-2">Repair Item Details</h3>
            {complaintsSingleData?.RepairItem?.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm font-semibold mb-1">Item {index + 1}</p>
                <ul>
                  <li>
                    <strong>Status:</strong> {item.status}
                  </li>
                  {/* Add more item details here */}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInDetails;

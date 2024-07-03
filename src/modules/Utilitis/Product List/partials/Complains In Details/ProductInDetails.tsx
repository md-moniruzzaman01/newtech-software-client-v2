import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey, emptyData } from "../../../../../shared/config/constaints";
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

  return (
    <div className="border p-4">
      <h2 className="text-xl font-semibold mb-4">Repair Details</h2>
      <div className="">
        {/* Left Column */}
        <div>
          {/* Serial Number */}
          <div className="border p-3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Serial Number</h3>
            <p>{complaintsSingleData?.serial_number}</p>
          </div>
          {/* Repair Details */}
          <div>
            {complaintsSingleData?.repair?.map((item, index) => (
              <div
                key={index}
                className="border-4 border-grayForBorder p-2 mb-2 flex flex-col gap-5"
              >
                <p className="text-lg font-semibold  ">
                  Repair Details ({index + 1})
                </p>
                <div className="border p-3 flex justify-between">
                  <div>
                    <p>
                      <strong>Repair ID:</strong> {item?.id}
                    </p>
                    <p>
                      <strong>Order Number:</strong> {item?.order_number}
                    </p>
                    <p>
                      <strong>Category Name:</strong> {item?.category_name}
                    </p>
                    <p>
                      <strong>Brand ID:</strong> {item?.brand_name}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Branch ID:</strong> {item?.branch}
                    </p>
                    <p>
                      <strong>Receiver:</strong> {item?.receiver}
                    </p>
                    <p>
                      <strong>Receive Date:</strong>{" "}
                      {item?.received_date?.toString()?.slice(0, 10)}
                    </p>
                    <p>
                      <strong>Repair Status:</strong> {item?.repair_status}
                    </p>
                  </div>
                </div>
                <ul className="border p-3 ">
                  <li className="text-lg font-semibold mb-2">Repair Item</li>
                  <div className="flex gap-5 flex-wrap justify-around">
                    {item?.RepairItem?.map((repairData, indx) => (
                      <ul key={indx} className="p-2 border min-w-[200px]">
                        <li className="font-bold">{indx + 1}.</li>
                        <li>
                          <strong>Repair Item ID:</strong> {repairData?.id}
                        </li>
                        <li>
                          <strong>Serial No:</strong>{" "}
                          {repairData?.serial_number}
                        </li>
                        <li>
                          <strong>Engineer:</strong> {repairData?.engineer?.id}
                        </li>
                        <li>
                          <strong>Note:</strong> {repairData?.note || emptyData}
                        </li>
                        <li>
                          <strong>Status:</strong> {repairData?.status}
                        </li>
                        <li>
                          <strong>Created Date:</strong>{" "}
                          {repairData?.createdAt?.toString()?.slice(0, 10)}
                        </li>
                      </ul>
                    ))}
                  </div>
                </ul>
                <ul className="border p-3">
                  <li className="text-lg font-semibold mb-2">QA Details</li>
                  <div className="flex gap-5 flex-wrap w-full">
                    {item?.Qa?.map((qaData, i) => (
                      <ul key={i} className="p-2 border">
                        <li className="font-bold">{i + 1}.</li>
                        <li>
                          <strong>Repair Item ID:</strong> {qaData?.id}
                        </li>
                        <li>
                          <strong>Serial No:</strong> {qaData?.serial_number}
                        </li>
                        <li>
                          <strong>Engineer:</strong> {qaData?.qa_checker_id?.id}
                        </li>
                        <li>
                          <strong>Note:</strong> {qaData?.note || emptyData}
                        </li>
                        <li>
                          <strong>Status:</strong> {qaData?.status}
                        </li>
                        <li>
                          <strong>Created Date:</strong>{" "}
                          {qaData?.createdAt?.toString()?.slice(0, 10)}
                        </li>
                      </ul>
                    ))}
                  </div>
                </ul>
                <ul className="border p-3">
                  <li className="text-lg font-semibold mb-2">QC Details</li>
                  <div className="flex gap-5 flex-wrap w-full">
                    {item?.Qc?.map((qaData, i) => (
                      <ul key={i} className="p-2 border">
                        <li className="font-bold">{i + 1}.</li>
                        <li>
                          <strong>Repair Item ID:</strong> {qaData?.id}
                        </li>
                        <li>
                          <strong>Serial No:</strong> {qaData?.serial_number}
                        </li>
                        <li>
                          <strong>RMA No:</strong> {qaData?.rma}
                        </li>
                        <li>
                          <strong>Engineer:</strong> {qaData?.qc_checker_id?.id}
                        </li>
                        <li>
                          <strong>Note:</strong> {qaData?.note || emptyData}
                        </li>
                        <li>
                          <strong>Status:</strong> {qaData?.status}
                        </li>
                        <li>
                          <strong>Created Date:</strong>{" "}
                          {qaData?.createdAt?.toString()?.slice(0, 10)}
                        </li>
                      </ul>
                    ))}
                  </div>
                </ul>
                <ul className="border p-3">
                  <li className="text-lg font-semibold mb-2">
                    Product Request
                  </li>
                  <div className="flex gap-5 flex-wrap w-full">
                    {item?.partrequest?.map((qaData, i) => (
                      <ul key={i} className="p-2 border">
                        <li className="font-bold">{i + 1}.</li>
                        <li>
                          <strong>Repair Item ID:</strong> {qaData?.id}
                        </li>
                        <li>
                          <strong>Serial No:</strong> {qaData?.serial_number}
                        </li>
                        <li>
                          <strong>Parts No:</strong> {qaData?.parts?.toString()}
                        </li>
                        <li>
                          <strong>User:</strong> {qaData?.user?.id}
                        </li>
                        <li>
                          <strong>Note:</strong> {qaData?.note || emptyData}
                        </li>
                        <li>
                          <strong>Status:</strong> {qaData?.status}
                        </li>
                        <li>
                          <strong>Created Date:</strong>{" "}
                          {qaData?.createdAt?.toString()?.slice(0, 10)}
                        </li>
                      </ul>
                    ))}
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
      </div>
    </div>
  );
};

export default ProductInDetails;

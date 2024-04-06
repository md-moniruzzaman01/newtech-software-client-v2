import { useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps } from "../config/types";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetComplaintByIdQuery } from "../../../../redux/features/api/complaints";

const ComplaintOrderDetailsTable = ({ id }: { id: string | undefined }) => {
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
    <div className="w-full ">
      {/* header row start here  */}
      <div className="grid grid-cols-8 gap-5 text-center text-sm font-medium">
        <div className="">Order No</div>
        <div className="">SL No</div>
        <div className="">Model No</div>
        <div className="">Category</div>
        <div className="">Problem</div>
        <div className="">Remarks</div>
        <div className="">Repair Count</div>
        <div className="">Total Charge</div>
      </div>
      <hr className="border-b border-shadeOfGray my-2" />

      <div className="text-center text-xs">
        {/* second row start here  */}
        <div className="grid grid-cols-8  text-center">
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.order_number}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.serial_number}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.model_number}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.category_name}
          </div>
          <div className="border py-2 border-gray-400">{"No Data"}</div>
          <div className="border py-2 border-gray-400">{"No Data"}</div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.repair_count}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.total_charge}
          </div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />
        {/* third row start here  */}
      </div>
      <div className="pt-5">
        Create invoice by :{" "}
        {complaintsSingleData?.Nonwarrentycustomer?.name || "Customer"}
      </div>
    </div>
  );
};

export default ComplaintOrderDetailsTable;
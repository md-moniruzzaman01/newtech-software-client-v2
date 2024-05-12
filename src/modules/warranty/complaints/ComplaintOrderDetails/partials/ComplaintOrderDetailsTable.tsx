import { useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps } from "../config/types";
import { useGetComplaintByIdQuery } from "../../../../../redux/features/api/complaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { NavLink } from "react-router-dom";
import Button from "../../../../../common/components/Button";

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
      <div className="grid grid-cols-7 gap-5 text-center text-sm font-medium">
        <div className="">Order No</div>
        <div className="">SL No</div>
        <div className="">Model No</div>
        <div className="">Category</div>
        <div className="">Problem</div>
        <div className="">Remarks</div>
        <div className="">Repair Count</div>
      </div>
      <hr className="border-b border-shadeOfGray my-2" />

      <div className="text-center text-xs">
        {/* second row start here  */}
        <div className="grid grid-cols-7  text-center">
          <NavLink
            to={`/complaints/order-in-details/${complaintsSingleData?.id}`}
            className=" border py-2 border-gray-400 !bg-transparent"
          >
            <Button link className="text-xs">
              {complaintsSingleData?.order_number}
            </Button>
          </NavLink>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.serial_number}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.model_number}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.category_name}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.attachments}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.problems?.toString()}
          </div>
          <div className="border py-2 border-gray-400">
            {complaintsSingleData?.products?.repair_count}
          </div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />
      </div>
    </div>
  );
};

export default ComplaintOrderDetailsTable;

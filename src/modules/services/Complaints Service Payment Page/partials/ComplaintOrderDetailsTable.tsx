import { useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps, RepairItem } from "../config/types";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import Input from "../../../../common/components/Input";
import { useGetBillByIdQuery } from "../../../../redux/features/api/service";

const ComplaintOrderDetailsTable = ({
  id,
  isEdit,
}: {
  id?: string;
  isEdit?: boolean;
  data?: RepairItem[];
}) => {
  const [billSingleData, setBillSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const token = getFromLocalStorage(authKey);
  const {
    data: billData,
    isError: billError,
    isLoading: billLoading,
  } = useGetBillByIdQuery({ id, token });
  useEffect(() => {
    if (!billError && !billLoading) {
      setBillSingleData(billData?.data);
    }
  }, [billData, billError, billLoading]);
  console.log(billSingleData);
  return (
    <div className="w-full ">
      {/* header row start here  */}
      <div className="grid grid-cols-6 gap-5 text-center">
        <div>Order No</div>
        <div>SL No</div>
        <div>Problem</div>
        <div>Discount</div>
        <div>Hidden Discount</div>
        <div>Service Charge</div>
      </div>
      <hr className="border-b border-shadeOfGray my-2" />

      <div className="text-center">
        {/* second row start here  */}
        {billSingleData &&
          billSingleData?.repair?.map((item, index) => (
            <div key={index} className="grid grid-cols-6  text-center">
              <div className="border py-2 border-grayForBorder">
                {item?.order_number}
              </div>
              <div className="border py-2 border-grayForBorder">
                {item?.products?.serial_number}
              </div>
              <div className="border py-2 border-grayForBorder">
                {item?.products?.problems?.join(",")}
              </div>
              <Input IsDisabled={isEdit} />
              <Input IsDisabled={isEdit} />
              <Input IsDisabled={isEdit} defaultValue={item?.total_charge} />
            </div>
          ))}

        <hr className="border-b border-shadeOfGray my-2" />

        <div className="flex justify-end">
          <hr className="border-b border-shadeOfGray my-2 w-1/2" />
        </div>
        {/* calculate area start here  */}
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2 my-1 py-2">
            <h3 className="font-semibold">Subtotal:</h3>
          </div>
          <div className="border py-2 border-gray-400 my-1">
            {billSingleData?.total_amount}
          </div>
        </div>
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2  py-2">
            <h3 className="font-semibold">Discount:</h3>
          </div>
          <div className="border py-2 border-gray-400 ">1,00,000.00</div>
        </div>
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2 my-1 py-2">
            <h3 className="font-semibold">Tax:</h3>
          </div>
          <div className="border py-2 border-gray-400 my-1">1,00,000.00</div>
        </div>
        <div className="flex justify-end">
          <hr className="border-b border-shadeOfGray my-2 w-1/2" />
        </div>
        {/* total calculate area  */}
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2 py-2">
            <h3 className="font-semibold">Total:</h3>
          </div>
          <div className="py-2 font-semibold">1,00,000.00</div>
        </div>
      </div>
      <div>Create invoice by : Johnson doe</div>
    </div>
  );
};

export default ComplaintOrderDetailsTable;

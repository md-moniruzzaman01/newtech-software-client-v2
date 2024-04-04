import { ChangeEvent, useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps } from "../config/types";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import Input from "../../../../common/components/Input";
import { useGetBillByIdQuery } from "../../../../redux/features/api/service";
import {
  handleDiscountChange,
  handleHiddenDiscountChange,
} from "../Helpers/DiscountFunction";

const ComplaintOrderDetailsTable = ({
  id,
  isEdit,
  setTotalDiscount,
  setTotalHiddenDiscount,
  totalDiscount,
  totalHiddenDiscount,
}: {
  id?: string;
  isEdit?: boolean;
  totalDiscount?: number;
  setTotalDiscount?: (value: number) => void;
  totalHiddenDiscount?: number;
  setTotalHiddenDiscount?: (value: number) => void;
}) => {
  const [billSingleData, setBillSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const [discount, setDiscount] = useState<number[]>([]);
  const [hiddenDiscount, setHiddenDiscount] = useState<number[]>([]);
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

    if (billData && billData.data && billData.data.repair) {
      const defaultDiscounts = billData.data.repair.map(() => 0);
      const defaultHiddenDiscounts = billData.data.repair.map(() => 0);
      setDiscount(defaultDiscounts);
      setHiddenDiscount(defaultHiddenDiscounts);
    }
  }, [billData, billError, billLoading, setHiddenDiscount, setDiscount]);

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
              <Input
                inputType="number"
                IsDisabled={isEdit}
                defaultValue={discount[index] === 0 ? null : discount[index]}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDiscountChange(
                    index,
                    Number(e.target.value),
                    discount,
                    setDiscount,
                    setTotalDiscount
                  )
                }
              />

              <Input
                IsDisabled={isEdit}
                defaultValue={
                  hiddenDiscount[index] === 0 ? null : hiddenDiscount[index]
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleHiddenDiscountChange(
                    index,
                    Number(e.target.value),
                    hiddenDiscount,
                    setHiddenDiscount,
                    setTotalHiddenDiscount
                  )
                }
              />
              <Input IsDisabled defaultValue={item?.total_charge} />
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
          <div className="border py-2 border-gray-400 ">
            {`${totalDiscount}% (${(totalDiscount !== 0 &&
            typeof billSingleData?.total_amount === "number" &&
            billSingleData?.total_amount !== undefined
              ? (totalDiscount / 100) * billSingleData.total_amount
              : 0
            ).toFixed(2)})`}
          </div>
        </div>
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2  py-2">
            <h3 className="font-semibold">Hidden Discount:</h3>
          </div>
          <div className="border py-2 border-gray-400 ">
            {`${totalHiddenDiscount}% (${(totalDiscount !== 0 &&
            typeof billSingleData?.total_amount === "number" &&
            billSingleData?.total_amount !== undefined
              ? (totalHiddenDiscount / 100) * billSingleData.total_amount
              : 0
            ).toFixed(2)})`}
          </div>
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
          <div className="py-2 font-semibold">
            {billSingleData &&
              billSingleData?.total_amount -
                ((totalHiddenDiscount / 100) * billSingleData.total_amount +
                  (totalDiscount / 100) * billSingleData.total_amount)}
          </div>
        </div>
      </div>
      <div>Create invoice by : Johnson doe</div>
    </div>
  );
};

export default ComplaintOrderDetailsTable;

import { ChangeEvent, useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps, IDiscount } from "../config/types";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import Input from "../../../../common/components/Input";
import { useGetBillByIdQuery } from "../../../../redux/features/api/service";
import {
  handleDiscountChange,
  handleHiddenDiscountChange,
} from "../Helpers/DiscountFunction";
import Button from "../../../../common/components/Button";

const ComplaintOrderDetailsTable = ({
  id,
  isEdit,
}: {
  id?: string;
  isEdit?: boolean;
}) => {
  const [billSingleData, setBillSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);


  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [totalHiddenDiscount, setTotalHiddenDiscount] = useState<number>(0);

  const [discount, setDiscount] = useState<IDiscount[] | []>([]);
  const [hiddenDiscount, setHiddenDiscount] = useState<IDiscount[]| []>([]);
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


  }, [billData, billError, billLoading, setHiddenDiscount, setDiscount]);
  // function handleTotalDisount() {
  //   const updatedDiscount = discount.map(d => d.amount);
  //   const caltotalDiscount = updatedDiscount.reduce((acc, curr) => acc + curr, 0);
  //   setTotalDiscount(caltotalDiscount);
  // }

 

  const handleSubmitPayment = () => {
    // navigate("/service-invoice");
    console.log("discount", discount);
    console.log("total discount", totalDiscount);
    console.log("hidden", totalHiddenDiscount);
  };
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
                // defaultValue={discount[index]?.amount === 0 ? null : discount[index]}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDiscountChange(
                    item?.id,
                    Number(e.target.value),
                    discount,
                    setDiscount,
                    setTotalDiscount
                  )
                }
              />

              <Input
                IsDisabled={isEdit}
                // defaultValue={
                //   hiddenDiscount[index] === 0 ? null : hiddenDiscount[index]
                // }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleHiddenDiscountChange(
                    item?.id,
                    Number(e.target.value),
                    hiddenDiscount,
                    setHiddenDiscount,
                    setTotalHiddenDiscount
                  )
                }
              />
              <Input defaultValue={item?.total_charge} />
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
      <div className=" w-1/3 mx-auto py-10">
        <Button onClick={handleSubmitPayment} className="w-full" primary>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ComplaintOrderDetailsTable;

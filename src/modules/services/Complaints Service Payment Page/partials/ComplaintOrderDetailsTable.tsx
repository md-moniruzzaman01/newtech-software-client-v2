import { ChangeEvent, useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps, IDiscount } from "../config/types";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import Input from "../../../../common/components/Input";
import { useGetBillByIdQuery } from "../../../../redux/features/api/service";
import {
  handleDiscountChange,
  handleHiddenDiscountChange,
  handleServiceChange,
} from "../Helpers/DiscountFunction";
import Button from "../../../../common/components/Button";
import { SERVER_URL } from "../../../../shared/config/secret";

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
  const [hiddenDiscount, setHiddenDiscount] = useState<IDiscount[] | []>([]);
  const [repairServiceCharge, setRepairServiceCharge] = useState<IDiscount[] | []>([]);
  const [totalBillAmount, setTotalBillAmount] = useState<number>(0);

  const token = getFromLocalStorage(authKey);
  const {
    data: billData,
    isError: billError,
    isLoading: billLoading,
  } = useGetBillByIdQuery({ id, token });
  useEffect(() => {
    if (!billError && !billLoading) {
      setBillSingleData(billData?.data);
      const serviceCharge = billData?.data?.repair.map(item => {
        if (item.discount) {
            const existingIndex = discount.findIndex((d:IDiscount) => d.id === item.discount.id);
            if (existingIndex !== 1) {
              const UpdateDiscount = { id: item.discount?.id, amount: item.discount.amount }
            if (item.discount.type ==="Discount") {
              setDiscount(prevDiscounts => [...prevDiscounts, UpdateDiscount])
            }else{
              setHiddenDiscount(prevDiscounts => [...prevDiscounts, UpdateDiscount])
            }
            }
        }

        const newServiceCharge = { id: item.id, amount: item.total_charge };
        return newServiceCharge
      })
      setRepairServiceCharge(serviceCharge)

      setTotalBillAmount(billData?.data?.total_amount)
    }
  }, [billData, billError, billLoading, setHiddenDiscount, setDiscount]);

console.log(billSingleData)
  const handleSubmitPayment = () => {
    // navigate("/service-invoice");

    const url = `${SERVER_URL}/bill/${id}`;
    const fullData = { discount, hiddenDiscount, totalBillAmount, repairServiceCharge }

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));


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
                defaultValue={
                  discount.find((discountItem:IDiscount) => discountItem.id === item.id)?.amount || 0
                }
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
                inputType="number"
                IsDisabled={isEdit}
                defaultValue={
                  hiddenDiscount.find((discountItem:IDiscount) => discountItem.id === item.id)?.amount || 0
                }
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
              <Input defaultValue={item?.total_charge}
                IsDisabled={isEdit}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleServiceChange(
                    item?.id,
                    Number(e.target.value),
                    repairServiceCharge,
                    setRepairServiceCharge,
                    setTotalBillAmount
                  )
                }
              />
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
            {totalBillAmount}
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
            {`${totalDiscount}% (${(totalDiscount !== 0 ? ((totalDiscount / 100) * totalBillAmount).toFixed(2) : 0)})`}
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
            {`${totalHiddenDiscount}% (${(totalDiscount !== 0 ? ((totalHiddenDiscount / 100) * totalBillAmount).toFixed(2) : 0)})`}
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
              totalBillAmount -
              ((totalHiddenDiscount / 100) * totalBillAmount +
                (totalDiscount / 100) * totalBillAmount)}
          </div>
        </div>
      </div>
      {
        !isEdit && <div className=" w-1/3 mx-auto py-10">
          <Button onClick={handleSubmitPayment} className="w-full" primary>
            Save
          </Button>
        </div>
      }

    </div>
  );
};

export default ComplaintOrderDetailsTable;

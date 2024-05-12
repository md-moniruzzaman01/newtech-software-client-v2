/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps, IDiscount } from "../config/types";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import Input from "../../../../common/components/Input";
import {
  useBillUpdateDiscountMutation,
  useGetBillByIdQuery,
} from "../../../../redux/features/api/service";
import {
  handleDiscountChange,
  handleHiddenDiscountChange,
  handleServiceChange,
} from "../Helpers/DiscountFunction";
import Button from "../../../../common/components/Button";
import Modal from "../../../../common/components/Modal/Modal";
import {
  handleDelivededWithOutPaySubmit,
  handlePaymentSubmit,
} from "../Helpers/hanlePaymentService";
import { useNavigate } from "react-router-dom";
import { showSwal } from "../../../../shared/helpers/SwalShower";

const ComplaintOrderDetailsTable = ({
  id,
  isEdit,
}: {
  id?: string;
  isEdit?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [billSingleData, setBillSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);

  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [totalHiddenDiscount, setTotalHiddenDiscount] = useState<number>(0);

  const [discount, setDiscount] = useState<IDiscount[] | []>([]);
  const [hiddenDiscount, setHiddenDiscount] = useState<IDiscount[] | []>([]);
  const [repairServiceCharge, setRepairServiceCharge] = useState<
    IDiscount[] | []
  >([]);
  const [totalBillAmount, setTotalBillAmount] = useState<number>(0);

  const token = getFromLocalStorage(authKey);
  const navigate = useNavigate();
  const {
    data: billData,
    isError: billError,
    isLoading: billLoading,
  } = useGetBillByIdQuery({ id, token });
  const [updateDiscount, { isLoading: updateDiscountLoading }] =
    useBillUpdateDiscountMutation();
  useEffect(() => {
    if (!billError && !billLoading) {
      setBillSingleData(billData?.data);

      const serviceCharge = billData?.data?.repair.map((item) => {
        if (item.discount) {
          const existingIndex = discount.findIndex(
            (d: IDiscount) => d.id === item?.discount?.id
          );
          if (existingIndex !== 1) {
            const UpdateDiscount = {
              id: item.discount.id,
              amount: item.discount.amount,
            };
            if (item.discount.type === "Discount") {
              setDiscount([UpdateDiscount]);
            } else {
              setHiddenDiscount([UpdateDiscount]);
            }
          }
        }

        const newServiceCharge = { id: item.id, amount: item.total_charge };

        return newServiceCharge;
      });

      const totalCharge =
        billData &&
        billData?.data?.repair?.reduce(
          (prev: any, curr: any) => prev + curr?.total_charge,
          0
        );
      setRepairServiceCharge(serviceCharge);
      setTotalBillAmount(totalCharge);
    }
  }, [billData, billError, billLoading, setHiddenDiscount, setDiscount]);

  const handleSubmitPayment = async () => {
    const fullData = {
      discount,
      hiddenDiscount,
      totalBillAmount,
      repairServiceCharge,
    };
    const result = await updateDiscount({ id, token, fullData });
    showSwal(result);
  };

  const updateData = hiddenDiscount.map((data: IDiscount) => data.amount);
  const totalHiddenDiscountDefault = updateData?.reduce(
    (acc, curr) => acc + curr,
    0
  );
  const updateDataForDiscount = discount.map((data: IDiscount) => data.amount);
  const totalDiscountDefault = updateDataForDiscount?.reduce(
    (acc, curr) => acc + curr,
    0
  );

  const total =
    billSingleData &&
    totalBillAmount -
      ((totalHiddenDiscount / 100) * totalBillAmount +
        (totalDiscount / 100) * totalBillAmount);
  const totalDefault =
    billSingleData &&
    totalBillAmount -
      ((totalHiddenDiscountDefault / 100) * totalBillAmount +
        (totalDiscountDefault / 100) * totalBillAmount);
  return (
    <div className="w-full">
      <div>
        <div className="grid grid-cols-7 gap-5 text-center">
          <div>Order No</div>
          <div>SL No</div>
          <div>Problem</div>
          <div>Status</div>
          <div>Discount</div>
          <div>Hidden Discount</div>
          <div>Service Charge</div>
        </div>
        <hr className="border-b border-shadeOfGray my-2" />

        <div className="text-center">
          {/* second row start here  */}
          {billSingleData &&
            billSingleData?.repair?.map((item, index) => (
              <div key={index} className="grid grid-cols-7  text-center">
                <div className="border py-2 border-grayForBorder">
                  {item?.order_number}
                </div>
                <div className="border py-2 border-grayForBorder">
                  {item?.products?.serial_number}
                </div>
                <div className="border py-2 border-grayForBorder">
                  {item?.products?.problems?.join(",")}
                </div>
                <div className="border py-2 border-grayForBorder">
                  {billSingleData?.status}
                </div>
                <Input
                  inputType="number"
                  IsDisabled={isEdit}
                  defaultValue={
                    discount.find(
                      (discountItem: IDiscount) =>
                        item?.discount?.id === discountItem?.id
                    )?.amount || 0
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
                    hiddenDiscount.find(
                      (discountItem: IDiscount) =>
                        item?.discount?.id === discountItem?.id
                    )?.amount || 0
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
                <Input
                  defaultValue={item?.total_charge}
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
              {`${
                totalDiscount > 0 ? totalDiscount : totalDiscountDefault || 0
              }% (${
                totalDiscount !== 0
                  ? ((totalDiscount / 100) * totalBillAmount).toFixed(2)
                  : ((totalDiscountDefault / 100) * totalBillAmount).toFixed(2)
              })`}
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
              {`${
                totalHiddenDiscount > 0
                  ? totalHiddenDiscount
                  : totalHiddenDiscountDefault || 0
              }% (${
                totalDiscount !== 0
                  ? ((totalHiddenDiscount / 100) * totalBillAmount).toFixed(2)
                  : (
                      (totalHiddenDiscountDefault / 100) *
                      totalBillAmount
                    ).toFixed(2)
              })`}
            </div>
          </div>
          <div className="grid grid-cols-5  text-center">
            <div></div>
            <div></div>
            <div></div>
            <div className="text-end pr-2  py-2">
              <h3 className="font-semibold">Total:</h3>
            </div>
            <div className="border py-2 border-gray-400 ">
              {billSingleData?.total_amount === total ? total : totalDefault}
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
              <h3 className="font-semibold">Paid:</h3>
            </div>
            <div className="py-2 font-semibold">
              {billSingleData?.total_paid}
            </div>
          </div>
          <div className="grid grid-cols-5  text-center">
            <div></div>
            <div></div>
            <div></div>
            <div className="text-end pr-2 py-2">
              <h3 className="font-semibold">Due:</h3>
            </div>
            <div className="py-2 font-semibold">{billSingleData?.due}</div>
          </div>
        </div>
        <div className="flex  py-10">
          <div className="flex justify-start gap-2 items-center w-full">
            <Button
              primary
              className="w-full"
              mini
              onClick={() => setIsOpen(true)}
            >
              Payments
            </Button>

            {/* <Button className="w-full" onClick={() => handleRejected(id)} primary >
            Rejected
          </Button> */}
            <Button
              loading={isLoading}
              mini
              className="w-full"
              onClick={() =>
                handleDelivededWithOutPaySubmit(id, navigate, setIsLoading)
              }
              primary
            >
              Completed & waiting for bill
            </Button>

            <Modal
              header={"Make Payments"}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            >
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  handlePaymentSubmit(e, id, navigate, setIsLoading)
                }
                className="space-y-4 p-2"
              >
                <Input
                  defaultValue={billSingleData?.due}
                  inputPlaceholder="Amount..."
                  inputName="amount"
                  inputType="number"
                />
                <Input inputPlaceholder="NOte..." inputName="note" />
                <Button loading={isLoading} primary className="w-full">
                  Submit
                </Button>
              </form>
            </Modal>
          </div>
          <div className=" flex justify-end w-full">
            {!isEdit && (
              <Button
                loading={updateDiscountLoading}
                onClick={handleSubmitPayment}
                className="w-1/3"
                primary
              >
                Save
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintOrderDetailsTable;

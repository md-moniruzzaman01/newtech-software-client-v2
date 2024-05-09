import { IDiscount } from "../config/types";

export const handleDiscountChange = (
  id: string,
  value: number,
  discount: IDiscount[],
  setDiscount: React.Dispatch<React.SetStateAction<IDiscount[]>>,
  setTotalDiscount: (value: number) => void
) => {
  const existingIndex = discount.findIndex((d) => d.id === id);
  if (existingIndex !== -1) {
    const newDiscounts = [...discount];
    newDiscounts[existingIndex].amount = value;
    setDiscount(newDiscounts);
  } else {
    const newDiscount = { id, amount: value };
    setDiscount((prevDiscounts) => [...prevDiscounts, newDiscount]);
  }
  const updatedDiscount = discount.map((d) => d.amount);
  const totalDiscount = updatedDiscount.reduce((acc, curr) => acc + curr, 0);
  setTotalDiscount(totalDiscount);
};

export const handleHiddenDiscountChange = (
  id: string,
  value: number,
  hiddenDiscount: IDiscount[],
  setHiddenDiscount?: React.Dispatch<React.SetStateAction<IDiscount[]>>,
  setTotalHiddenDiscount?: (value: number) => void
) => {
  const existingIndex = hiddenDiscount.findIndex((d) => d.id === id);
  if (existingIndex !== -1) {
    const newDiscounts = [...hiddenDiscount];
    newDiscounts[existingIndex].amount = value;
    setHiddenDiscount(newDiscounts);
  } else {
    const newDiscount = { id, amount: value };
    setHiddenDiscount((prevDiscounts) => [...prevDiscounts, newDiscount]);
  }
  const totalDiscount = hiddenDiscount.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  setTotalHiddenDiscount(totalDiscount);
};
export const handleServiceChange = (
  id: string,
  value: number,
  repairServiceCharge?: IDiscount[],
  setRepairServiceCharge?: React.Dispatch<React.SetStateAction<IDiscount[]>>,
  setTotalBillAmount?: (value: number) => void
) => {
  const existingIndex = repairServiceCharge.findIndex((d) => d.id === id);
  if (existingIndex !== -1) {
    const newDiscounts = [...repairServiceCharge];
    newDiscounts[existingIndex].amount = value;
    setRepairServiceCharge(newDiscounts);
  } else {
    const newDiscount = { id, amount: value };
    setRepairServiceCharge((prevDiscounts) => [...prevDiscounts, newDiscount]);
  }

  const totalDiscount = repairServiceCharge.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  setTotalBillAmount(totalDiscount);
};

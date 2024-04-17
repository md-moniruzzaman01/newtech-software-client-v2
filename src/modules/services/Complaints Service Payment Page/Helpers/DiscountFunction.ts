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
    setDiscount(prevDiscounts => [...prevDiscounts, newDiscount]);
  }
  const updatedDiscount = discount.map(d => d.amount);
  const totalDiscount = updatedDiscount.reduce((acc, curr) => acc + curr, 0);
  setTotalDiscount(totalDiscount);
};


export const handleHiddenDiscountChange = (
  index: number,
  value: number,
  hiddenDiscount?: number[],

  setHiddenDiscount?: (value: number[]) => void,
  setTotalHiddenDiscount?: (value: number) => void
) => {
  const newHiddenDiscounts = [...hiddenDiscount];
  newHiddenDiscounts[index] = value;
  setHiddenDiscount(newHiddenDiscounts);

  // Calculate and store total hidden discount
  const totalHiddenDiscount = newHiddenDiscounts.reduce(
    (acc, curr) => acc + curr,
    0
  );
  // Assuming totalHiddenDiscount is a state variable
  setTotalHiddenDiscount(totalHiddenDiscount);
};

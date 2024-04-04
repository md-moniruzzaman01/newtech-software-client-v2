export const handleDiscountChange = (
  index: number,
  value: number,
  discount: number[],
  setDiscount?: (value: number[]) => void,
  setTotalDiscount?: (value: number) => void
) => {
  const newDiscounts = [...discount];
  newDiscounts[index] = value;
  setDiscount(newDiscounts);

  // Calculate and store total discount
  const totalDiscount = newDiscounts.reduce((acc, curr) => acc + curr, 0);
  // Assuming totalDiscount is a state variable
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

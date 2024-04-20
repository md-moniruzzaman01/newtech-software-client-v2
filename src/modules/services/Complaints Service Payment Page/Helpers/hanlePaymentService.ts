export const handlePaymentSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  id: string
) => {
  e.preventDefault();
  const form = e.currentTarget;
  const amount = parseInt(
    (form.elements.namedItem("amount") as HTMLInputElement)?.value || "0",
    10
  );
  console.log(amount, id);
};

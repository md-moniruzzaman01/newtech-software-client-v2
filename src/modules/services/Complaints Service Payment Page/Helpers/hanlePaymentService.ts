/* eslint-disable @typescript-eslint/no-explicit-any */
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";

export const handlePaymentSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  id: string,
  navigate: any,
  servicePayment: any
) => {
  e.preventDefault();

  const token = getFromLocalStorage(authKey);

  const form = e.currentTarget;
  const paymentamount = parseInt(
    (form.elements.namedItem("amount") as HTMLInputElement)?.value || "0",
    10
  );
  const note = (form.elements.namedItem("note") as HTMLInputElement).value;

  const fullData = { paymentamount, note };
  const result = await servicePayment({ fullData, token, id });
  const isSwalTrue = showSwal(result);
  if (isSwalTrue) {
    navigate(`/service-invoice/${result?.data?.data?.id}`);
  }
};

export const handleDelivededWithOutPaySubmit = async (
  id: string,
  navigate: any,
  deliveredWithOutPayment: any
) => {
  const token = getFromLocalStorage(authKey);

  const result = await deliveredWithOutPayment({ id, token });
  const isSwalTrue = showSwal(result);

  if (isSwalTrue) {
    navigate(`/service-invoice/${result?.data?.data?.id}`);
  }
};

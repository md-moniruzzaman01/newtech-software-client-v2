/* eslint-disable @typescript-eslint/no-explicit-any */
import swal from "sweetalert";
import { authKey } from "../../../../shared/config/constaints";
import { SERVER_URL } from "../../../../shared/config/secret";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

export const handlePaymentSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  id: string,
  navigate: any,
  setIsLoading: any
) => {
  e.preventDefault();

  const token = getFromLocalStorage(authKey);

  const form = e.currentTarget;
  const paymentamount = parseInt(
    (form.elements.namedItem("amount") as HTMLInputElement)?.value || "0",
    10
  );
  // console.log(paymantamount, id);

  const url = `${SERVER_URL}/bill/payment/${id}`;
  const fullData = { paymentamount };
  setIsLoading(true);
  await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
    body: JSON.stringify(fullData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.success) {
        swal("success", "Payment successful", "success");
        navigate("/service-invoice");
        form?.reset();
      } else {
        swal("error", "Payment failed", "error");
      }
      setIsLoading(false);
    });
};

export const handleDelivededWithOutPaySubmit = async (id: string) => {
  const token = getFromLocalStorage(authKey);
  const url = `${SERVER_URL}/bill/delivered/${id}`;

  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

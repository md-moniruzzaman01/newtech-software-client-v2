import swal from "sweetalert";

import { defaultPartnerValue } from "../config/constants";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { updateAddedItemProps } from "../config/types";
import { SERVER_URL } from "../../../../shared/config/secret";
import { partnerProps } from "../../../../shared/config/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDataSubmit = async (
  setAddedItem: React.Dispatch<React.SetStateAction<updateAddedItemProps[]>>,
  fullData: any,
  dispatch: any,
  setPartnerInfo: React.Dispatch<React.SetStateAction<partnerProps>>,
  navigate: any,
  setRedirectToPayment: React.Dispatch<React.SetStateAction<boolean>>,
  isPaymentButton: boolean,
  setIds: any,
  setloading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (isPaymentButton) {
    setRedirectToPayment(true);
  } else {
    setRedirectToPayment(false);
  }
  const token = getFromLocalStorage(authKey);

  try {
    setloading(true);
    const url = SERVER_URL + "/complaints/create-service";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          setAddedItem([]);
          const dataIds = result?.data?.map((item: { id: string }) => item?.id);
          dispatch(setIds(dataIds));
          setPartnerInfo(defaultPartnerValue);
          removeFromLocalStorage("addedItem");
          removeFromLocalStorage("customerInfo");
          swal(`${result?.message}`, {
            icon: "success",
          });

          if (isPaymentButton) {
            const fullData = {
              complaintIds: result?.data,
            };

            const url = SERVER_URL + "/bill/create";

            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: `${token}`,
              },
              body: JSON.stringify(fullData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data?.success) {
                  navigate(`/complaints-service-payments/${data?.data[0]?.id}`);
                } else {
                  swal("Error", `${data?.error?.data?.message}`, "error");
                }
              });
          }

          if (!isPaymentButton) {
            window.open(`/recipe/${result.data?.toString()}`, "Print recipe!");
          }
        } else if ("error" in result || "errorMessages" in result) {
          swal(`${result?.error?.data?.message}`, {
            icon: "error",
          });
        }
        setloading(false);
      });
  } catch (error) {
    console.error("Error adding complaint:", error);
  }
  setRedirectToPayment(false);
};

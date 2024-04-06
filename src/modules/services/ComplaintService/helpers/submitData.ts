import swal from "sweetalert";

import { defaultPartnerValue } from "../config/constants";
import { getFromLocalStorage, removeFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { partnerProps, updateAddedItemProps } from "../config/types";

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
    setloading(true)
    const url = "https://nt.necgroupbd.net/api/v2/complaints/create-service"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((result) => {
        if ("data" in result) {
          setAddedItem([]);
          const dataIds = result?.data?.data?.map(
            (item: { id: string }) => item?.id
          );
          dispatch(setIds(dataIds));
          setPartnerInfo(defaultPartnerValue);
          removeFromLocalStorage("addedItem");
          removeFromLocalStorage("customerInfo");
          swal("Your data has been successfully submitted.", {
            icon: "success",
          });
          if (isPaymentButton) {
            navigate("/complaints-service-payments");
          }
        } else if ("error" in result) {
          swal("Something went wrong!", {
            icon: "error",
          });
        }
        setloading(false)
      });






  } catch (error) {
    console.error("Error adding complaint:", error);
  }
  setRedirectToPayment(false);
};

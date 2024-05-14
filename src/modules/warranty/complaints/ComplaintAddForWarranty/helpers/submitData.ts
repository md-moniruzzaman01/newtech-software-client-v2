import swal from "sweetalert";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDataSubmit = async (
  setIsLoading: any,
  fullData: any,
  setWarrantyAddedItem: any,
  setPartnerInfo: any,
  setIsNewPartner: any,
  createComplaints: any
) => {
  const token = getFromLocalStorage(authKey);
  setIsLoading(true);
  const result = await createComplaints({ fullData, token });
  console.log(result);
  if (result?.data?.success) {
    setWarrantyAddedItem([]);
    setPartnerInfo({
      partner_id: "",
      contact_number: "",
      brand_name: "",
    });

    removeFromLocalStorage("warrantyAddedItem");
    removeFromLocalStorage("partnerInfo");
    removeFromLocalStorage("newCustomer");
    setIsNewPartner(false);
    swal(`${result?.data?.message}`, {
      icon: "success",
    });
    setIsLoading(false);
  } else {
    swal(`${result?.error?.data?.message}`, {
      icon: "error",
    });
    setIsLoading(false);
  }
};

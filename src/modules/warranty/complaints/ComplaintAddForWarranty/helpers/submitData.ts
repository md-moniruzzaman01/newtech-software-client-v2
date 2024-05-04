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
  console.log(fullData)
  setIsLoading(true);
  const result = await createComplaints({ fullData, token });
  if ("data" in result) {
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
    swal("Your data has been successfully submitted.", {
      icon: "success",
    });
    setIsLoading(false);
  } else if ("error" in result) {
    swal("Something went wrong!", {
      icon: "error",
    });
    setIsLoading(false);
  }
};

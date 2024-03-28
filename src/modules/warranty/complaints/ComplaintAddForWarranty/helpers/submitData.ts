import swal from "sweetalert";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDataSubmit = async (
  addComplaint: any,
  fullData: any,
  setWarrantyAddedItem: any,
  setPartnerInfo: any,
  setIsNewPartner: any
) => {
  const token = getFromLocalStorage(authKey);
  try {
    const result = await addComplaint({ fullData, token });

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
    } else if ("error" in result) {
      swal("Something went wrong!", {
        icon: "error",
      });
    }
  } catch (error) {
    console.error("Error adding complaint:", error);
  }
};

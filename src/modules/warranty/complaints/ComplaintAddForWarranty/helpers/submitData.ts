import swal from "sweetalert";
import { removeFromLocalStorage } from "../../../../../shared/helpers/local_storage";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDataSubmit = async (
  addComplaint: any,
  fullData: any,
  setWarrantyAddedItem: any,
  setPartnerInfo: any,
  setIsNewPartner: any
) => {
  try {
    const result = await addComplaint(fullData);

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

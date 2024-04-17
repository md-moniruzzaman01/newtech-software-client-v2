import swal from "sweetalert";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { SERVER_URL } from "../../../../../shared/config/secret";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDataSubmit = async (
  setIsLoading: any,
  fullData: any,
  setWarrantyAddedItem: any,
  setPartnerInfo: any,
  setIsNewPartner: any
) => {
  const token = getFromLocalStorage(authKey);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { authorization: token }), // Conditionally set the authorization header
    },
    body: JSON.stringify(fullData),
  };
const url = SERVER_URL + "complaints/create"
  try {
    setIsLoading(true);
    const response = await fetch(
      url,
      options
    );

    if (!response.ok) {
      throw new Error("Failed to add complaint");
    }

    const result = await response.json();

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
    setIsLoading(false);
  } catch (error) {
    console.error("Error adding complaint:", error);
    setIsLoading(false);
  }
};

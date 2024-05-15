import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { showSwal } from "../../../../../shared/helpers/SwalShower.ts";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDataSubmit = async (
  fullData: any,
  setWarrantyAddedItem: any,
  setPartnerInfo: any,
  setIsNewPartner: any,
  createComplaints: any
) => {
  const token = getFromLocalStorage(authKey);

  const result = await createComplaints({ fullData, token });
  const swalIsTrue = showSwal(result);
  if (swalIsTrue) {
    setWarrantyAddedItem([]);
    setPartnerInfo({
      partner_id: "",
      contact_number: "",
      brand_name: "",
    });
    window.open(`/recipe/${result.data?.data?.toString()}`);
    removeFromLocalStorage("warrantyAddedItem");
    removeFromLocalStorage("partnerInfo");
    removeFromLocalStorage("newCustomer");
    setIsNewPartner(false);
  }
};

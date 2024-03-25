/* eslint-disable @typescript-eslint/no-explicit-any */
import swal from "sweetalert";
import { removeFromLocalStorage } from "../../../../../libs/local_storage";

export const deleteAll = (
  setPartnerInfo: any,
  setWarrantyAddedItem: any,
  setIsNewPartner: any
) => {
  swal({
    title: "Are you sure?",
    text: "This action will delete all data permanently. Are you sure you want to proceed?",
    icon: "warning",
    buttons: ["Cancel", "Delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      setWarrantyAddedItem([]);
      setPartnerInfo({
        partner_id: "",
        contact_number: "",
        brand_name: "",
      });
      localStorage.removeItem("warrantyAddedItem");
      localStorage.removeItem("partnerInfo");
      localStorage.removeItem("newCustomer");
      setIsNewPartner(false);
      swal("Your data has been successfully deleted.", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
};

export const deleteData = (
  index: number,
  warrantyAddedItem: any,
  setPartnerInfo: any,
  setWarrantyAddedItem: any,
  setSelectedItem: any
) => {
  swal({
    title: "Are you sure?",
    text: "This action will delete all data permanently. Are you sure you want to proceed?",
    icon: "warning",
    buttons: ["Cancel", "Delete"], // Example of custom buttons
    dangerMode: true,
  }).then((willDelete: boolean) => {
    if (willDelete) {
      // Remove the item at the specified index from addedItem state
      const updatedAddedItem = warrantyAddedItem.filter(
        (_: any, i: number) => i !== index
      );
      if (updatedAddedItem?.length === 0) {
        localStorage.removeItem("partnerInfo");
        localStorage.removeItem("newCustomer");
        setPartnerInfo({
          partner_id: "",
          contact_number: "",
          brand_name: "",
        });
      }
      // Update state with the new array
      setWarrantyAddedItem(updatedAddedItem);

      // Save the updated array in local storage
      localStorage.setItem(
        "warrantyAddedItem",
        JSON.stringify(updatedAddedItem)
      );

      setSelectedItem(null);
      swal("Your data has been successfully deleted.", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
};

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

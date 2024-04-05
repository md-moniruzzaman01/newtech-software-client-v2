import swal from "sweetalert";
import { defaultPartnerValue } from "../config/constants";
import { removeFromLocalStorage } from "../../../../shared/helpers/local_storage";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const deleteAll = (
  setPartnerInfo: any,
  setAddedItem: any,
) => {
  swal({
    title: "Are you sure?",
    text: "This action will delete all data permanently. Are you sure you want to proceed?",
    icon: "warning",
    buttons: ["Cancel", "Delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      setAddedItem([]);
      setPartnerInfo(defaultPartnerValue);
      removeFromLocalStorage("addedItem")
      removeFromLocalStorage("partnerInfo")
      removeFromLocalStorage("customerInfo")
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
  addedItem: any,
  setAddedItem: any,
  setSelectedItem: any,

) => {
  swal({
    title: "Are you sure?",
    text: "This action will delete all data permanently. Are you sure you want to proceed?",
    icon: "warning",
    buttons: ["Cancel", "Delete"], // Example of custom buttons
    dangerMode: true,
  }).then((willDelete: boolean) => {
    if (willDelete) {

      const updatedAddedItem = addedItem.filter((_, i) => i !== index);
      if (updatedAddedItem?.length === 0) {
        removeFromLocalStorage("partnerInfo");
        removeFromLocalStorage("customerInfo");
      }

      setAddedItem(updatedAddedItem);

      localStorage.setItem(
        "addedItem",
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

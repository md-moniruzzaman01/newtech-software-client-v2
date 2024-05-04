import { partnerProps } from "../../../../shared/config/types";
import { updateAddedItemProps } from "../config/types";

export const handleAddItem = (
  event: React.FormEvent<HTMLFormElement>,
  addedItem: updateAddedItemProps[],
  mainCategoryValue: string,
  selectedItem: number,
  setPartnerInfo: React.Dispatch<React.SetStateAction<partnerProps>>,
  setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>,
  setSelectData: React.Dispatch<
    React.SetStateAction<updateAddedItemProps | null>
  >,
  setAddedItem: React.Dispatch<
    React.SetStateAction<updateAddedItemProps[] | []>
  >
) => {
  event.preventDefault();
  const form = event.currentTarget; // Use currentTarget for the form element
  const name = (form.elements.namedItem("partner_name") as HTMLInputElement)
    .value;
  const contact_number = (
    form.elements.namedItem("contact_number") as HTMLInputElement
  ).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const address = (form.elements.namedItem("address") as HTMLInputElement)
    .value;

  const brand_name = (
    form.elements.namedItem("brand_name") as HTMLInputElement
  ).value?.toUpperCase();
  const category = (form.elements.namedItem("category") as HTMLInputElement)
    .value;
  const model_number = (
    form.elements.namedItem("model_number") as HTMLInputElement
  ).value;
  const serial_number = (
    form.elements.namedItem("serial_number") as HTMLInputElement
  ).value;

  const attachments = (
    form.elements.namedItem("attachments") as HTMLInputElement
  ).value;

  const problems = (form.elements.namedItem("problem") as HTMLInputElement)
    .value;

  const partner = {
    name,
    contact_number,
    email,
    address,
  };

  setPartnerInfo(partner);

  const data = {
    brand_name,
    model_number,
    serial_number,
    attachments,
    problems,
    category,
    category_name: mainCategoryValue,
  };

  let updatedAddedItem: updateAddedItemProps[];

  if (!Array.isArray(addedItem)) {
    updatedAddedItem = [data];
  } else if (selectedItem !== null) {
    updatedAddedItem = [
      ...addedItem.slice(0, selectedItem),
      data,
      ...addedItem.slice(selectedItem + 1),
    ];
    setSelectedItem(null);
    setSelectData(null);
  } else {
    updatedAddedItem = [...addedItem, data];
  }

  setAddedItem(updatedAddedItem);

  localStorage.setItem("addedItem", JSON.stringify(updatedAddedItem));
  localStorage.setItem("customerInfo", JSON.stringify(partner));
  form.reset();
};

export const updateData = (
  index: number,
  addedItem: updateAddedItemProps[],
  setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>,
  setSelectData: React.Dispatch<
    React.SetStateAction<updateAddedItemProps | null>
  >
) => {
  const selectedItemData: updateAddedItemProps = addedItem[index];

  setSelectedItem(index);
  setSelectData(selectedItemData);
};

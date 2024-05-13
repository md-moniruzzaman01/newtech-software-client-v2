import {
  PartnerProps,
  warrantyPartnerProps,
  warrantyUpdateAddedItemProps,
} from "../../modules/warranty/complaints/ComplaintAddForWarranty/config/types";

export const handleAddItem = (
  event: React.FormEvent<HTMLFormElement>,
  selectPartner: PartnerProps,
  brandValue: string,
  isNewPartner: boolean,
  warrantyAddedItem: warrantyUpdateAddedItemProps[],
  mainCategoryValue: string,
  categoryValue: string,
  selectedItem: number | null,
  setPartnerInfo: React.Dispatch<
    React.SetStateAction<warrantyPartnerProps | null>
  >,
  setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>,
  setSelectData: React.Dispatch<
    React.SetStateAction<warrantyUpdateAddedItemProps | null>
  >,
  setWarrantyAddedItem: React.Dispatch<
    React.SetStateAction<warrantyUpdateAddedItemProps[] | []>
  >
) => {
  event.preventDefault();
  const form = event.currentTarget;

  const partner_name = (
    form.elements.namedItem("partner_name") as HTMLInputElement
  )?.value;
  const partner_id = selectPartner?._id;
  const contactNo = selectPartner?.contactNo;
  const contact_number = (
    form.elements.namedItem("contact_number") as HTMLInputElement
  )?.value;
  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
  const address = (form.elements.namedItem("address") as HTMLInputElement)
    ?.value;

  const brand_name = (form.elements.namedItem("brand_name") as HTMLInputElement)
    ?.value;
  const brand_name_for_new = (
    form.elements.namedItem("brand_name_for_new") as HTMLInputElement
  )?.value;
  // const category_name = (
  //   form.elements.namedItem("main_category") as HTMLInputElement
  // ).value;

  const category = (form.elements.namedItem("category") as HTMLInputElement)
    .value;
  const model_number = (
    form.elements.namedItem("model_number") as HTMLInputElement
  ).value;
  const serial_number = (
    form.elements.namedItem("serial_number") as HTMLInputElement
  ).value;

  const attachments = (form.elements.namedItem("remark") as HTMLInputElement)
    .value;

  const problems = (form.elements.namedItem("problems") as HTMLInputElement)
    .value;
  const newCustomer = {
    partner_name,
    contact_number,
    email: email,
    address: address,
    brand_name: brand_name_for_new,
  };
  const partner = {
    brandValue,
    partner_id,
    contactNo,
    brand_name,
  };
  if (isNewPartner) {
    setPartnerInfo(newCustomer);
    localStorage.setItem("newCustomer", JSON.stringify(newCustomer));
  }

  if (!isNewPartner && warrantyAddedItem?.length <= 0) {
    setPartnerInfo(partner);
    localStorage.setItem("partnerInfo", JSON.stringify(partner));
  }

  const data = {
    model_number,
    serial_number,
    attachments,
    problems,
    category,
    category_name: mainCategoryValue,

    categoryValue,
  };

  let updatedAddedItem: warrantyUpdateAddedItemProps[];

  if (!Array.isArray(warrantyAddedItem)) {
    updatedAddedItem = [data];
  } else if (selectedItem !== null) {
    updatedAddedItem = [
      ...warrantyAddedItem.slice(0, selectedItem),
      data,
      ...warrantyAddedItem.slice(selectedItem + 1),
    ];
    setSelectedItem(null);
    setSelectData(null);
  } else {
    updatedAddedItem = [...warrantyAddedItem, data];
  }

  setWarrantyAddedItem(updatedAddedItem);
  localStorage.setItem("warrantyAddedItem", JSON.stringify(updatedAddedItem));
  form.reset();
};

export const updateData = (
  index: number,
  warrantyAddedItem: warrantyUpdateAddedItemProps[],
  setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>,
  setSelectData: React.Dispatch<
    React.SetStateAction<warrantyUpdateAddedItemProps | null>
  >
) => {
  const selectedItemData: warrantyUpdateAddedItemProps =
    warrantyAddedItem[index];

  setSelectedItem(index);
  setSelectData(selectedItemData);
};

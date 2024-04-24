export const headerDataForCategory = [
  "#",
  "Name",
  "Category Id",
  "Charge",
  "Create Date",
];
export const headerDataForCategoryWarranty = [
  "#",
  "Name",
  "Category Id",
  "Brand Id",
  "Charge",
  "CID",
  "Swap",
  "CN",
  "NTF",
  "Create Date",
];

export const tableLayout = [
  "item?.id",
  "item?.value",
  "item?.category",
  "item?.basic_service_charge",
  "item?.createdAt?.toString()?.slice(0,10)",
];
export const tableLayoutForWarranty = [
  "item?.id",
  "item?.value",
  "item?.category",
  "item?.brand",
  "item?.basic_service_charge",
  "item?.CID",
  "item?.swap",
  "item?.CN",
  "item?.NTF",
  "item?.createdAt?.toString()?.slice(0,10)",
];

export const btnValues = [
  { label: "Pending", value: "Pending" },
  { label: "Completed", value: "Completed" },
];

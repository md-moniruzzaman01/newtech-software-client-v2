export const MyQCTableHeader = [
  "id",
  "Order ID",
  "S/N No.",
  "user_name",
  "Status",
  "Qc CreatedAt",
  "RD",
  "Action",
];

export const qcSelectData = { id: "", user: "" };

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

export const tableLayout = [
  "item.order_number",
  "item?.products?.serial_number",
  "item?.products?.model_number",
  "item?.Nonwarrentycustomer?.name || item?.customer?.contact_person",
  "item?.category_name",
  "item?.brand_name",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0,10)",
];

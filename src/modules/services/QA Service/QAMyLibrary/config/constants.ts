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
  "item?.id",
  "item?.repair && item.repair?.order_number",
  "item?.serial_number",
  "item?.user_name",
  "item?.status",
  "item?.createdAt?.toString().slice(0, 10)",
  "item?.repair?.received_date?.toString().slice(0, 10)",
  "item?.received_date?.toString()?.slice(0,10)",
];

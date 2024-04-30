export const QATableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
  "Problems",
  "Attachments",
  "Category",
  "Category ID",
  "Brand ID",
  "Repair Count",
  "Status",
  "Received Date",
];

export const qaSelectData = { id: "", user: "" };
export const fields =
  " serial_number,model_number,brand_name,category,category_name,problems,attachments,repair_status,repair_count,repair_count,received_date,received_date";
export const keys = [
  "brand_name",
  "sort",
  "repair-status",
  "search",
  "category_name",
];

export const tableLayout = [
  "item?.repair?.[0]?.order_number",
  "item?.model_number",
  "item?.serial_number",
  "item?.problems",
  "item?.attachments",
  "item?.category_name",
  "item?.category",
  "item?.brand_name",
  "item?.repair_count",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0, 10)",
];

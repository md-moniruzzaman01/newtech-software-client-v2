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
  // "Action",
];

export const qaSelectData = { id: "", user: "" };
export const fields =
  " serial_number,model_number,brand_name,category,category_name,problems,attachments,repair_status,repair_count,repair_count,received_date,warranty";
export const keys = [
  "brand_name",
  "sort",
  "repair-status",
  "searchTerm",
  "category_name",
];

export const tableLayout = [
  "item?.repair?.[item?.repair.length - 1]?.order_number",
  "item?.model_number",
  "item?.serial_number",
  "item?.problems",
  "item?.attachments",
  "item?.category_name",
  "item?.category",
  "item?.brand_name",
  "item?.warranty.toString()",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0, 10)",
];

export const QATableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
  "Customer Name",
  "category",
  "Brand",
  "QC",
  "Engineer",
  "QA",
  "Status",
  "RD",
  "Action",
];

export const qaSelectData = { id: "", user: "" };
export const fields =
  "serial_number,model_number,brand_name,category,category_name,problems,attachments,repair_status,repair_count,repair_count,received_date,received_date";
export const keys = [
  "brand_name",
  "sort",
  "repair-status",
  "search",
  "category_name",
];

export const tableLayout = [
  "item?.repair?.order_number",
  "item?.model_number",
  "item?.serial_number",
  "item?.problems",
  "item?.attachments",
  "item?.category_name",
  "item?.category",
  "item?.brand_name",
  "item?.repair_count",
  "item?.repair?.branch",
  "item?.repair_status",
  "item?.turnaround_time?.toString()?.slice(0, 10)",
];

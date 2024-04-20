export const QCTableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
  "Problems",
  "Category",
  "Brand ID",
  "Repair Status",
  "Repair Count",
  "Received Date",
];

export const qcSelectData = { id: "", user: "" };

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
  "item?.repair && item.repair.length > 0 && item.repair[item.repair.length - 1].order_number",
  "item?.model_number",
  "item?.serial_number",
  "item?.problems?.toString() || item?.customer?.contact_person",
  "item?.category_name",
  "item?.brand_name",
  "item?.repair_status",
  "item?.repair_count",
  "item?.received_date?.toString()?.slice(0,10)",
];

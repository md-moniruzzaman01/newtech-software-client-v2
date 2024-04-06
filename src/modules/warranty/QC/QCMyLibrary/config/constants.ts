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
  "item.id",
  "item.repair?.order_number",
  "item.serial_number",
  "item.repair?.Nonwarrentycustomer?.name || item.repair?.customer?.contact_person",
  "item.repair?.category_name",
  "item.repair?.brand_name",
  "item.repair?.repair_status",
  "item.createdAt?.toString()?.slice(0,10)",
];

export const MyQCTableHeader = [
  "id",
  "S/N No.",
  "Status",
  "Qc CreatedAt",
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
  "item.serial_number",

  "item?.status",
  "item.createdAt?.toString()?.slice(0,10)",
];

export const EngineerTableHeader = [
  "Serial No",
  "Model No",
  "Category",
  "Problems",
  "Remarks",
  "Repair Count",
  "Status",
];
export const engineerSelectData = { id: "", user: "" };

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
  "item.serial_number",
  "item?.model_number",
  "item?.category_name",
  "item?.problems?.toString()",
  "item?.attachments",
  "item?.repair_count",
  "item?.repair_status",
];

export const EngineerTableHeader = [
  "Serial No",
  "Model No",
  "Category",
  "Problems",
  "Remarks",
  "Repair Count",
  "Status",
  "Created Date",
];
export const engineerSelectData = { id: "", user: "" };

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair-status",
  "searchTerm",
  "category_name",
];

export const tableLayout = [
  "item?.serial_number",
  "item?.model_number",
  "item?.category_name",
  "item?.problems?.toString()",
  "item?.attachments",
  "item?.repair_count",
  "item?.repair_status",
  "item?.createdAt?.slice(0,10)",
];

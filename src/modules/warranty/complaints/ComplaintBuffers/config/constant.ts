export const tableLayout = [
  "item?.model_number",
  "item?.serial_number",
  "item?.category_name",
  "item?.branch",
  "item?.brand_name",
  "item?.repair_count",
  "item?.problems",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0,10)",
];

export const fields =
  "attachments, branch, brand_name, category_name, createdAt, model_number, problems, received_date, repair_count, repair_status, serial_number";
export const keys = [
  "brand_name",
  "branch",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
  "start_Date",
  "end_Date",
];

export const complaintsTableHeader = [
  "Model No",
  "Serial No",
  "Category",
  "Branch",
  "Brand",
  "RC",
  "Problems",
  "Status",
  "RD",
  "Action",
];

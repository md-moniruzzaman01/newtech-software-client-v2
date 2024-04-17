export const EngineerTableHeader = [
  "Order ID",
  "S/N No.",
  "Model No.",
  "Problems",
  "Remarks",
  "category",
  "sub category",
  "Brand",
  "repair count",
  "Branch",
  "Status",
  "RD",
  "Action",
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
  "searchTerm"
];

export const tableLayout = [
  "item.repair[item.repair.length - 1]?.order_number",
  "item?.serial_number",
  "item?.model_number",
  "item?.problems.toString() || item?.problems.toString()",
  "item?.attachments",
  "item?.category",
  "item?.category_name",
  "item?.brand_name",
  "item?.repair_count",
  "item?.repair[item.repair.length - 1]?.branch",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0,10)",
];

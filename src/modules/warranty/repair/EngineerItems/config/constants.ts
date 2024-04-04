export const EngineerTableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
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
];

export const tableLayout = [
  "item.order_number",
  "item?.products?.serial_number",
  "item?.products?.model_number",
  "item?.Nonwarrentycustomer?.name || item?.customer?.contact_person",
  "item?.category_name",
  "item?.brand_name",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0,10)",
];

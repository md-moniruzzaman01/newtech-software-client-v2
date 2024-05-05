export const fields = "";
export const keys = [
  "brand_name",
  "branch",
  "sort",
  "repair_status",
  "searchTerm",
  "category",
];

export const complaintsTableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
  "Customer Name",
  "category",
  "Brand",
  "Status",
  "RD",
  "Action",
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

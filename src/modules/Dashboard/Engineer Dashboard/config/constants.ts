export const EngineerDashboardTableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
  "Customer Name",
  "category",
  "Brand",
  "QC",
  "Engineer",
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

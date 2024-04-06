export const tableLayout = [
  "item?.id",
  "item?.order_number",
  "item?.products?.model_number",
  "item?.products?.serial_number",
  "item?.customer?.contact_person || item?.Nonwarrentycustomer?.name || 'N/A'",
  "item?.category_name",
  "item?.brand_name",
  "item?.Qc?.user_name",
  "item?.RepairItem?.user_name",
  "item?.Qa?.user_name",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0, 10)",
];

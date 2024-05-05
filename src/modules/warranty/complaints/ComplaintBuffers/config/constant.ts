export const tableLayout = [
  "item?.id",
  "item?.order_number",
  "item?.products?.serial_number",
  "item?.products?.model_number",
  "item?.customer?.contact_person || item?.Nonwarrentycustomer?.name || 'N/A'",
  "item?.brand_name",
  "item?.Qc?.length",
  "item?.Qa?.length",
  "item?.repair_status",
  "item?.received_date?.toString()?.slice(0,10)",
];

export const fields =
  "id,customer,brand_name,repair_status,order_number,received_date,Qc,RepairItem,Qa,partrequest,Nonwarrentycustomer";
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
  "ID",
  "Order No",
  "S/N No.",
  "Model No",
  "Customer Name",
  "Brand",
  "QC",
  "QA",
  "Status",
  "RD",
  "Action",
];

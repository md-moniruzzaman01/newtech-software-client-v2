export const fields =
  "id,customer,brand_name,repair_status,order_number,received_date,Qc,RepairItem,Qa,partrequest,Nonwarrentycustomer";
export const keys = [
  "brand",
  "branch",
  "sort",
  "repair_status",
  "search",
  "category",
];

export const btnValue = [
  "Pending",
  "In Progress",
  "Buffer",
  "Cancel",
  "Reject",
  "CN",
  "NTF",
  "Required Parts",
  "Completed",
  "Delivered",
  "Unpaid",
  "Paid",
];

export type SearchParams = {
  brand: string | null;
  branch: string | null;
  sort: string | null;
  status: string | null;
};

export const complaintsTableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
  "Customer Name",
  "category",
  "Brand",
  "QC",
  "Engineer",
  "QA",
  "Status",
  "RD",
  "Action",
];

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

export const fields = "";
export const keys = [
  "brand_name",
  "branch",
  "sort",
  "repair-status",
  "searchTerm",
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

export const CreateBillServiceTableHeader = [
  "Order ID",
  "Model No.",
  "S/N No.",
  "Customer Name",
  "category",
  "Brand",
  "Status",

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

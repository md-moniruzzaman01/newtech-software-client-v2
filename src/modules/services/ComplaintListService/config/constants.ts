export const fields =
  "id,customer,brand_name,repair_status,order_number,received_date,Qc,RepairItem,Qa,partrequest,Nonwarrentycustomer,category_name";
export const keys = [
  "brand",
  "branch",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

export const btnValue = [
  { label: "Pending", value: "Pending" },
  { label: "In%20Progress", value: "In Progress" },
  { label: "Cancel", value: "Cancel" },
  { label: "Reject", value: "Reject" },
  { label: "Required Parts", value: "Required Parts" },
  { label: "Repair Failed", value: "Repair Failed" },
  { label: "Completed", value: "Completed" },
  { label: "Delivered", value: "Delivered" },
  { label: "Unpaid", value: "Unpaid" },
  { label: "Paid", value: "Paid" },
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
  "Status",
  "RD",
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

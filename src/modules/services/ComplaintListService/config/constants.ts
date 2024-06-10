export const fields =
  "id,customer,brand_name,repair_status,order_number,received_date,Qc,RepairItem,Qa,partrequest,Nonwarrentycustomer,category_name";
export const keys = [
  "brand_name",
  "branch",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

export const btnValue = [
  { label: "Pending", value: "Pending" },
  { label: "In Progress", value: "In Progress" },
  { label: "Cancel", value: "Cancel" },
  { label: "Reject", value: "Reject" },
  { label: "Required Parts", value: "Required Parts" },
  { label: "Repair failed", value: "Repair failed" },
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
  "Complaints ID",
  "S/N No.",
  "Model No.",
  "Customer Name",
  "category",
  "Brand",
  "Status",
  "RD",
  "Action",
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

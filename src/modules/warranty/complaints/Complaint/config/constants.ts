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

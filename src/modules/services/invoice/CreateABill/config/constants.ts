export const fields =
  "id,customer,brand_name,repair_status,order_number,received_date,Qc,RepairItem,Qa,partrequest,Nonwarrentycustomer";
export const keys = [
  "brand",
  "branch",
  "sort",
  "repair-status",
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

export const CreateBillServiceTableHeader = [
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

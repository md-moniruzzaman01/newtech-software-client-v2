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

export const tableHeaderForComplaints = [
  "Order No",
  "Serial No",
  "Customer Name",
  "Brand",
  "Model No",
  "QC Name",
  "Repair Name",
  "QA Name",
  "Parts Request",
  "Repair Status",
  "Received Date",
];

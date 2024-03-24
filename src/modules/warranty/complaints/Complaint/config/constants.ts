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

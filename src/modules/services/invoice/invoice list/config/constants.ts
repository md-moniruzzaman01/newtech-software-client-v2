export const fields = "";
export const keys = ["branch", "sort", "status", "searchTerm"];

export const btnValue = [
  { label: "pending", value: "pending" },
  {
    label: "Delivered Without Payment",
    value: "Delivered Without Payment",
  },
  { label: "completed", value: "completed" },
  { label: "canceled", value: "canceled" },
];

export type SearchParams = {
  brand: string | null;
  branch: string | null;
  sort: string | null;
  status: string | null;
};

export const BillServiceTableHeader = [
  "bill ID",
  "customer",
  "complaints count",
  "total amount",
  "Due",
  "status",
  "created",
  "Updated",
  "Action",
  "Action",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.customer?.name",
  "item?.repair && item?.repair?.length",
  "item?.total_amount",
  "item?.due",
  "item?.status",
  "item?.createdAt?.toString()?.slice(0,10)",
  "item?.updatedAt?.toString()?.slice(0,10)",
];

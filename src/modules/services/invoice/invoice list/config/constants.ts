export const fields = "";
export const keys = ["branch", "sort", "status", "searchTerm"];

export const btnValue = [
  { label: "pending", value: "pending" },
  {
    label: "Delivered & waiting for bill",
    value: "completed & waiting for bill",
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
  "created date",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.customer?.name",
  "item?.repair && item?.repair?.length",
  "item?.total_amount",
  "item?.due",
  "item?.status",
  "item?.generatedby?.Engineer?.firstName",
  "item?.createdAt?.toString()?.slice(0,10)",
];

export const TableHeader = [
  "ID",
  "Branch",
  "Type",
  "Create Date",
  "Note",
  "Amount",
];

export const tableLayout = [
  "item.id",
  "item?.branch",
  "item?.type",
  "item?.createdAt?.toString()?.slice(0,10)",
  "item?.note",
  "item?.amount",
];

export const withdrawOption = [
  { id: "withdraw", value: "Withdraw" },
  { id: "deposit", value: "Deposit" },
];

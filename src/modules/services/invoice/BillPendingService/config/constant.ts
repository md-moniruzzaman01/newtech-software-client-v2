export const BillTableHeader = [
  "ID",
  "Branch",
  "Total Amount",
  "Due",
  "Status",
  "Created Date",
  "Action",
  "Action",
];

export const tableLayout = [
  "item.id",
  "item?.branch",
  "item?.total_amount",
  "item?.due",
  "item?.status",
  "item?.createdAt?.toString()?.slice(0,10)",
];

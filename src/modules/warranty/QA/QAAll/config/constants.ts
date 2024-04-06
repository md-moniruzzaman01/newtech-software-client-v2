export const QATableHeader = [
  "id",
  "Order ID",
  "S/N No.",
  "user_name",
  "rma",
  "images",
  "Qc CreatedAt",

  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.repair?.order_number",
  "item?.serial_number",
  "item?.user_name",
  "item?.status",
  "item?.createdAt?.toString().slice(0, 10)",
  "item?.repair?.received_date?.toString().slice(0, 10)",
];

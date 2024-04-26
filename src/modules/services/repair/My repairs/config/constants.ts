export const LibraryTableBtnValue = [
  "all",
  "pending",
  "accepted",
  "rejected",
  "cancelled",
];

export const MyRepairTableHeader = [
  "ID",
  "Order No",
  "SL No",
  "Category",
  "Brand",
  "Status",
  "Create Date",
  "Received Date",
  "Note",
  "Action",
];

export const tableLayout = [
  "item.id",
  "item?.repair?.order_number",
  "item?.serial_number",
  "item?.repair?.category_name",
  "item?.repair?.brand_name",
  "item?.status",
  "item?.createdAt?.toString()?.slice(0,10)",
  "item?.repair?.received_date?.toString()?.slice(0,10)",
  "item?.note",
];

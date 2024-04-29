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
  "Complaints R/D",
  "SL No",
  "Category",
  "Brand",
  "Status",
  "Create Date",
  "Updated Date",
  "Note",
];

export const tableLayout = [
  "item.id",
  "item?.repair?.order_number",
  "item?.repair?.received_date?.toString()?.slice(0,10)",
  "item?.serial_number",
  "item?.repair?.category_name",
  "item?.repair?.brand_name",
  "item?.status",
  "item?.note",
  "item?.createdAt?.toString()?.slice(0,10)",
  "item?.updatedAt?.toString()?.slice(0,10)",
];

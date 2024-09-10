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
  "Customer",
  "Category",
  "Brand",
  "Status",
  "Note",
  "Updated Date",
  "Created Date",
];

export const tableLayout = [
  "item.id",
  "item?.repair?.order_number",
  "item?.repair?.received_date?.toString()?.slice(0,10)",
  "item?.serial_number",
  "item?.repair?.Nonwarrentycustomer?.name",
  "item?.repair?.category_name",
  "item?.repair?.brand_name",
  "item?.status",
  "item?.note",
  "item?.createdAt?.toString()?.slice(0,10)",
  "item?.updatedAt?.toString()?.slice(0,10)",
];

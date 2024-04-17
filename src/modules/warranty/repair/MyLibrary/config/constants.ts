export const LibraryTableBtnValue = [
  "all",
  "pending",
  "accepted",
  "rejected",
  "cancelled",
];

export const keys = [
  "brand_name",
  "sort",
  "repair-status",
  "search",
  "category_name",
];
export const fields = "";

export const MyEngineerLibraryHeader = [
  "id",
  "Order ID",
  "S/N No.",
  "Status",
  "Qc CreatedAt",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.repairId",
  "item?.serial_number",
  "item?.status",
  " item?.createdAt?.toString()?.substring(0, 10)",
];

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
  "searchTerm",
  "category_name",
];
export const fields = "";

export const MyEngineerLibraryHeader = [
  "ID",
  "Order ID",
  "S/N No.",
  "Engineer ID",
  "Status",
  "Qc CreatedAt",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.repairId",
  "item?.serial_number",
  "item?.engineer?.id",
  "item?.status",
  " item?.createdAt?.toString()?.substring(0, 10)",
];

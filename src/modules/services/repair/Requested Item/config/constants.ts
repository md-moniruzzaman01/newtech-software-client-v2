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
  "S/N No.",
  "Order ID",
  "Customer",
  "Engineer ID",
  "Status",
  "Qc CreatedAt",
  "Action",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.serial_number",
  "item?.repairId",
  "item?.repair?.Nonwarrentycustomer?.name",
  "item?.engineer?.id",
  "item?.status",
  " item?.createdAt?.toString()?.substring(0, 10)",
];

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

export const RepairLibraryTableHeader = [
  "Repair ID",
  "Order No.",
  "S/N No.",
  "Engineer ID",
  "status",
  "Action",
];

export const tableLayout = [
  "item.id",
  "item.repair?.order_number",
  "item.serial_number",
  "item?.engineer?.id",
  "item.status",
  "item.createdAt?.toString()?.slice(0,10)",
];

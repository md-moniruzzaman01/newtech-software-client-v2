export const LibraryTableBtnValue = [
  "all",
  "pending",
  "accepted",
  "rejected",
  "cancelled",
];

export const tableLayout = [
  "item?.id",
  "item?.repairId || item.repair?.order_number",
  "item?.serial_number",
  "item?.repair?.Nonwarrentycustomer?.name",
  "item?.status",
  "item?.createdAt?.toString().slice(0, 10)",
];

export const MyQCTableHeader = [
  "ID",
  "Repair Id",
  "S/N No",
  "Customer",
  "Status",
  "Qc CreatedAt",
];

export const fields = "";
export const keys = [
  "brand_name",
  "branch",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

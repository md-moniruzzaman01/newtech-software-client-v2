export const LibraryTableBtnValue = [
  "all",
  "pending",
  "accepted",
  "rejected",
  "cancelled",
];

export const MyRepairHeader = [
  "id",
  "Order ID",
  "S/N No.",
  "Customer",
  "Status",
  "Qc CreatedAt",
];

export const tableLayout = [
  "item.id",
  "item?.repairId",
  "item?.serial_number",
  "item?.repair?.customer?.contact_person",
  "item?.status",
  " item?.createdAt?.toString()?.substring(0, 10)",
];

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

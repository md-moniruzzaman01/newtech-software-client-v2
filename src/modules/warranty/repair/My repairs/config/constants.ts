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
  "Status",
  "Qc CreatedAt",
  "Action",
];

export const tableLayout = [
  "item.id",
  "item?.repairId",
  "item?.serial_number",
  "item?.status",
  " item?.createdAt?.toString()?.substring(0, 10)",
];

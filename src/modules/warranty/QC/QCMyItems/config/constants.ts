export const QCTableHeader = [
  "ID",
  "Repair ID",
  "S/N No.",
  "RMA",
  "Status",
  "Qc CreatedAt",
];

export const tableLayout = [
  "item.id",
  "item?.repairId",
  "item.serial_number",
  "item.rma",
  "item?.status",
  "item.createdAt?.toString()?.slice(0,10)",
];

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

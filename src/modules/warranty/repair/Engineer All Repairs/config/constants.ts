export const LibraryTableBtnValue = [
  "all",
  "pending",
  "accepted",
  "rejected",
  "cancelled",
];

export const MyQCTableHeader = [
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

export const keys = [
  "brand_name",
  "sort",
  "repair-status",
  "searchTerm",
  "category_name",
];

export const fields =
  "serial_number,model_number,brand_name,category,category_name,problems,attachments,repair_status,repair_count,repair_count,received_date,received_date";

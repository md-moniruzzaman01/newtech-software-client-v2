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
  "startDate",
  "endDate",
];
export const fields = "";

export const MyEngineerLibraryHeader = [
  "ID",
  "Order ID",
  "S/N No.",
  "Customer",
  "Engineer",
  "Status",
  "Qc CreatedAt",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.repair?.order_number",
  "item?.serial_number",
  "item?.repair?.customer?.contact_person",
  "item?.engineer?.Engineer?.name?.firstName + ' ' + item?.engineer?.Engineer?.name?.lastName",
  "item?.status",
  " item?.createdAt?.toString()?.substring(0, 10)",
];

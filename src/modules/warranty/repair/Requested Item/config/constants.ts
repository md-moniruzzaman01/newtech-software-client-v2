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
  "Serial No",
  "Order ID",
  "Category Name",
  "Receiver",
  "Customer",
  "Status",
  "Last Update",
  "RD",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.products?.serial_number",
  "item?.order_number",
  "item?.category_name",
  "item?.receiver",
  "item?.customer?.contact_person",
  "item?.repair_status",
  " item?.updatedAt?.toString()?.substring(0, 10)",
  " item?.createdAt?.toString()?.substring(0, 10)",
];

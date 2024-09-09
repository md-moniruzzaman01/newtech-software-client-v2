export const QATableHeader = [
  "ID",
  "Repair ID",
  "Serial Number",
  "status",
  "QA CreatedAt",
  "Last Updated",
];

export const tableLayout = [
  "item?.id",
  "item?.repair?.id",
  "item?.serial_number",
  "item?.status",
  "item?.createdAt?.toString().slice(0, 10)",
  "item?.updatedAt?.toString()?.slice(0,10)",
];

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

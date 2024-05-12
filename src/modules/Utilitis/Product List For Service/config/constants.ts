export const QATableHeader = [
  "Serial No",
  "Model No",
  "Category Name",
  "Brand ID",
  "Remark",
  "Problem",
  "Status",
  "Created Date",
];

export const tableLayout = [
  "item?.serial_number",
  "item?.model_number",
  "item?.category_name",
  "item?.brand_name",
  "item?.attachments",
  "item?.problems?.toString()",
  "item?.repair_status",
  "item?.createdAt?.toString().slice(0, 10)",
];

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

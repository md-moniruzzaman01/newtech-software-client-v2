export const QATableHeader = [
  "ID",
  "Repair ID",
  "Serial Number",
  "Engineer",
  "status",
  "QA CreatedAt",
  "Last Updated",
];

export const tableLayout = [
  "item?.id",
  "item?.repair?.id",
  "item?.serial_number",
  "`${item?.qa_checker_id?.Engineer?.name?.firstName}  ${item?.qa_checker_id?.Engineer?.name?.lastName}`",
  "item?.status",
  "item?.createdAt?.toString().slice(0, 10)",
  "item?.updatedAt?.toString().slice(0, 10)",
];

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];
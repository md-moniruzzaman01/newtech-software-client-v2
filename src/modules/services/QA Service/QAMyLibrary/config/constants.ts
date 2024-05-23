export const MyQCTableHeader = [
  "ID",
  "Repair ID",
  "S/N No.",
  "Engineer",
  "Status",
  "Qc CreatedAt",
  "RD",
  "Action",
];

export const qcSelectData = { id: "", user: "" };

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

export const tableLayout = [
  "item?.id",
  "item?.repair && item.repair?.order_number",
  "item?.serial_number",
  `${"item?.qa_checker_id?.Engineer?.name?.firstName"} + " " + ${"item?.qa_checker_id?.Engineer?.name?.lastName"}`,
  "item?.status",
  "item?.createdAt?.toString().slice(0, 10)",
  "item?.repair?.received_date?.toString().slice(0, 10)",
];

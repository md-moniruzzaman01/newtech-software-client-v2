export const MyQCTableHeader = [
  "ID",
  "Serial No",
  "Engineer Name",
  "Status",
  "QA CreatedAt",
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
  "item.id",
  "item?.serial_number",
  `${"item?.qa_checker_id?.Engineer?.name?.firstName"} + " " + ${"item?.qa_checker_id?.Engineer?.name?.lastName"}`,
  "item?.status",
  "item?.createdAt?.toString()?.slice(0,10)",
];

export const MyQCTableHeader = [
  "ID",
  "S/N No.",
  "complaints ID",
  "Engineer",
  "Status",
  "Qc CreatedAt",
  "Action",
];

export const qcSelectData = { id: "", user: "" };

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair-status",
  "searchTerm",
  "category_name",
];

export const tableLayout = [
  "item.id",
  "item?.serial_number",
  "item?.repairId",
  `${"item?.qc_checker_id?.Engineer?.name?.firstName"} +" " + ${"item?.qc_checker_id?.Engineer?.name?.lastName"}`,
  "item?.status",
  "item.createdAt?.toString()?.slice(0,10)",
];

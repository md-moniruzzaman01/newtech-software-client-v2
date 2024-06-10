export const MyQCTableHeader = [
  "ID",
  "complaints ID",
  "S/N No.",
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
  "item?.repairId",
  "item.serial_number",
  `${"item?.qc_checker_id?.Engineer?.name?.firstName"} +" " + ${"item?.qc_checker_id?.Engineer?.name?.lastName"}`,
  "item?.status",
  "item.createdAt?.toString()?.slice(0,10)",
];

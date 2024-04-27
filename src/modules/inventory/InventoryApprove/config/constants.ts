export const TableHeaderForInventory = [
  "#",
  "User ID",
  "Branch",
  "Parts",
  "Serial Number",
  "Status",
  "Created Date",
  "Note",
  "Action",
];

export const query = "status=Approve";

export const tableLayout = [
  "item?.id",
  "item?.user?.id",
  "item?.user?.branch",
  "item?.parts",
  "item?.serial_number",
  "item?.status",
  "item?.createdAt?.toString()?.slice(0,10)",
  "item?.note",
];

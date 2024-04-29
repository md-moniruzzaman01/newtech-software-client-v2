export const headerForEngineersTable = [
  "ID",
  "Name",
  "Designation",
  "Contact Number",
  "Email",
  "Created Date",
];
export const tableLayout = [
  "item?.id",
  `${"item?.name?.firstName"} + " " + ${"item?.name?.lastName"}`,
  "item?.designation",
  "item?.contactNo",
  "item?.email",
  "item?.createdAt?.toString().slice(0, 10)",
];

export const headerForEngineersTable = [
  "ID",
  "Name",
  "Designation",
  "Branch",
  "Email",
  "Contact Number",
  "Created Date",
  "Action",
  "Action",
  "Action",
];
export const tableLayout = [
  "item?.id",
  `${"item?.name?.firstName"} + " " + ${"item?.name?.lastName"}`,
  "item?.designation",
  "item?.branch",
  "item?.email",
  "item?.contactNo",
  "item?.createdAt?.toString().slice(0, 10)",
];

export const fields = "";
export const keys = ["searchTerm"];

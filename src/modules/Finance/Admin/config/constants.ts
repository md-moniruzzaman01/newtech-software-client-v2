export const btnValues = [
  { id: "Pending", value: "Pending" },
  { id: "Completed", value: "Completed" },
];

export const TableHeaderForAdmin = [
  "ID",
  "Name",
  "Email",
  "Contact",
  "Designation",
  "Created Date",
];

export const tableLayout = [
  "item?.id",
  `item?.name?.firstName + " " + item?.name?.lastName`,
  "item?.email",
  "item?.contactNo",
  "item?.designation",
  "item?.createdAt?.toString()?.slice(0,10)",
];

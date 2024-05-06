export const QATableHeader = [
  "id",
  "Order ID",
  "Complaint R/D",
  "S/N No.",
  "user_name",
  "status",
  "images",
  "Qa CreatedAt",
  "Updated",
];

export const tableLayout = [
  "item?.id",
  "item?.repair?.id",
  "item?.repair?.received_date?.toString().slice(0, 10)",
  "item?.serial_number",
  "item?.user_name",
  "item?.status",
  "item?.qa_imag?.toString()",
  "item?.createdAt?.toString().slice(0, 10)",
  "item?.updatedAt?.toString()?.slice(0,10)",
];

export const fields = "";
export const keys = [
  "brand_name",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
];

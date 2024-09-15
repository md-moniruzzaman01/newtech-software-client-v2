export const fields = "";

export const keys = [
  "brand_name",
  "branch",
  "sort",
  "repair_status",
  "searchTerm",
  "category_name",
  "start_Date",
  "end_Date",
];

export const complaintsTableHeader = ["ID", "S/N No.", "Customer Name", "RD"];

export const tableLayout = [
  "item?.id",
  "item?.products?.serial_number",
  "item?.customer?.contact_person || item?.Nonwarrentycustomer?.name || 'N/A'",

  "item?.received_date?.toString()?.slice(0,10)",
];

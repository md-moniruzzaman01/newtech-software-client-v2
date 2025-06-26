export const BillTableHeader = [
  "Bill ID",
  "Customer",
  "Complaints Count",
  "Total Amount",
  "Transaction",
  "Due",
  "Status",
  "Note",
  "Created",
  "Updated",
  "Action",
];

export const tableLayout = [
  "item?.id",
  "item?.customer?.name",
  "item?.repair && item?.repair?.length",
  "item?.total_amount",
  "item?.transaction?.length && item?.transaction?.map?.((data, index) => index === item?.transaction?.length - 1 ? `${data?.amount} ` : `${data?.amount}, `)",
  "item?.due",
  "item?.status",
  "item?.transaction?.slice(-1)[0]?.note",
  "item?.createdAt?.toString()?.slice(0,10)",
  "item?.updatedAt?.toString()?.slice(0,10)",
];

export const fields = "";
export const keys = [
  "brand_name",
  "branch",
  "sort",
  "sortOrder",
  "repair_status",
  "searchTerm",
  "category_name",
  "startDate",
  "endDate",
];

export const headerForRepair = [
  "Repair ID",
  "Status",
  "Serial No",
  "Engineer ID",
  "Repair Status",
  "Order No",
  "Created Date",

  "Updated Date",
];

export const tableLayoutForRepair = [
  "item?.repairId",
  "item?.status",
  "item?.serial_number",
  "item?.engineer",
  "item?.repair?.repair_status",
  "item?.repair?.order_number",
  "item?.createdAt?.slice(0,10)",
  "item?.updatedAt?.slice(0,10)",
];

export const headerForBill = [
  "Bill ID",
  "Status",
  "Customer ID",
  "Branch",
  "Repair ID",
  "Serial No",
  "Repair Status",
  "Created Date",
  "Updated Date",
  "Total Amount",
  "Total Paid",
  "Due",
];

export const tableLayoutForBill = [
  "item.id", // Bill ID
  "item.status",
  "item.customer",
  "item.branch",
  "item.repair[0]?.id", // Repair ID (assuming there's only one repair item in the array)
  "item.repair[0]?.serial_number", // Serial No
  "item.repair[0]?.repair_status", // Repair Status
  "item.createdAt?.slice(0, 10)", // Created Date
  "item.updatedAt?.slice(0, 10)", // Updated Date
  "item.total_amount", // Total Amount
  "item.total_paid", // Total Paid
  "item.due", // Due Amount
];

export const headerForDiscount = [
  "Discount ID",
  "Branch",
  "Amount",
  "Type",
  "Discount Provider",
  "MW Customer",
  "Repair ID",
  "Serial No",
  "Repair Status",
  "Created Date",
  "Updated Date",
];

export const tableLayoutForDiscount = [
  "item.id", // Discount ID
  "item.branch",
  "item.amount", // Discount Amount
  "item.type", // Type of Discount
  "item.discount_provider", // Discount Provider ID
  "item.MWcustomer", // MW Customer ID
  "item.Repair.id", // Repair ID
  "item.Repair.serial_number", // Serial No
  "item.Repair.repair_status", // Repair Status
  "item.createdAt?.slice(0, 10)", // Created Date
  "item.updatedAt?.slice(0, 10)", // Updated Date
];

export const headerForQa = [
  "QA ID",
  "Branch",
  "Serial No",
  "Status",
  "Repair ID",
  "Repair Status",
  "Order Number",
  "Created Date",
  "Updated Date",
  "Warranty",
  "QA Checker ID",
];

export const tableLayoutForQa = [
  "item.id", // QA ID
  "item.branch",
  "item.serial_number", // Serial No
  "item.status", // QA Status
  "item.repair.id", // Repair ID
  "item.repair.repair_status", // Repair Status
  "item.repair.order_number", // Order Number
  "item.createdAt?.slice(0, 10)", // Created Date
  "item.updatedAt?.slice(0, 10)", // Updated Date
  "item.warranty", // Warranty
  "item.qa_checker_id", // QA Checker ID
];
export const headerForQc = [
  "QA ID",
  "Branch",
  "Serial No",
  "Status",
  "Repair ID",
  "Repair Status",
  "Order Number",
  "Created Date",
  "Updated Date",
  "Warranty",
  "QA Checker ID",
];

export const tableLayoutForQc = [
  "item.id", // QA ID
  "item.branch",
  "item.serial_number", // Serial No
  "item.status", // QA Status
  "item.repair.id", // Repair ID
  "item.repair.repair_status", // Repair Status
  "item.repair.order_number", // Order Number
  "item.createdAt?.slice(0, 10)", // Created Date
  "item.updatedAt?.slice(0, 10)", // Updated Date
  "item.warranty", // Warranty
  "item.qa_checker_id", // QA Checker ID
];

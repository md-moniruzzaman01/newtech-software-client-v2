/* eslint-disable @typescript-eslint/no-explicit-any */
export type ComplaintsOrderStatusProps = {
  isEdit?: boolean;
  branch?: string;
  defaultOrderStatus?: string;
  defaultRepairStatus?: string;
};

export type ProductsProps = {
  attachments: string;
  brand_name: string;
  category: string;
  category_name: string;
  createdAt: string; // Assuming ISO date string format
  model_number: string;
  problems: string[]; // Assuming an array of string for problems
  received_date: string; // Assuming ISO date string format
  repair: string[]; // Assuming an array of string for repair
  repair_count: number;
  repair_status: string;
  serial_number: string;
  turnaround_time: string | null; // Assuming it's a string or null
  updatedAt: string; // Assuming ISO date string format
  warranty: boolean;
  __v: number;
  _id: string;
};

export type ComplaintsOrderDetailsProps = {
  Nonwarrentycustomer_contact_number: string;
  Nonwarrentycustomer?: { name?: string; contact_number?: string };
  Qa: any[]; // Assuming any type for now
  Qc: any[]; // Assuming any type for now
  RepairItem: any[]; // Assuming any type for now
  branch: string;
  brand_name: string;
  category_name: string;
  createdAt: string; // Assuming ISO date string format
  customer: string;
  customer_contact_number: string;
  due: number;
  id: string;
  is_cancelled: boolean;
  lastNotificationDate: string | null; // Assuming it's a string or null
  order_number: string;
  partrequest: any[]; // Assuming any type for now
  products: ProductsProps;
  received_date: string; // Assuming ISO date string format
  receiver: string;
  repair_status: string;
  total_charge: number;
  total_paid: number;
  turnaround_time: string; // Assuming ISO date string format
  updatedAt: string; // Assuming ISO date string format
  warranty: boolean;
  __v: number;
  _id: string;
  message: string;
  statusCode: number;
  success: boolean;
};

export type ComplaintOrderDetailsTableProps = {
  data?: ComplaintsOrderDetailsProps | null;
};

export type ComplaintMiniCardProps = {
  header?: string;
  name?: string | number;
  img?: string;
  status?: string;
  notes?: string;
};

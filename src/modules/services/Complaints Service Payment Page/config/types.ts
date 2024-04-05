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

// export type ComplaintsOrderDetailsProps = {
//   Nonwarrentycustomer_contact_number: string;
//   Qa: any[]; // Assuming any type for now
//   Qc: any[]; // Assuming any type for now
//   RepairItem: any[]; // Assuming any type for now
//   branch: string;
//   brand_name: string;
//   category_name: string;
//   createdAt?: string; // Assuming ISO date string format
//   customer: string;
//   customer_contact_number: string;
//   due: number;
//   id: string;
//   is_cancelled: boolean;
//   lastNotificationDate: string | null; // Assuming it's a string or null
//   order_number: string;
//   partrequest: any[]; // Assuming any type for now
//   products: ProductsProps;
//   received_date: string; // Assuming ISO date string format
//   receiver: string;
//   repair_status: string;
//   total_charge: number;
//   total_paid: number;
//   turnaround_time: string; // Assuming ISO date string format
//   updatedAt: string; // Assuming ISO date string format
//   warranty: boolean;
//   __v: number;
//   _id: string;
//   message: string;
//   statusCode: number;
//   success: boolean;
// };

export type Engineer = {
  id: string;
  name: {
    firstName?: string;
    middle?: string;
    lastName?: string;
  };
  _id: string;
};

export type Product = {
  category: string;
  model_number: string;
  problems: string[];
  serial_number: string;
};

export type RepairItem = {
  id: string;
  category_name: string;
  total_charge: number;
  order_number: string;
  products: Product;
  status: string;
  total_amount: number;
  total_paid: number;
};

export type ComplaintsOrderDetailsProps = {
  branch: string;
  createdAt: string;
  customer: string;
  due: number;
  status?: string;
  generatedby: {
    Engineer: Engineer;
  };
  id: string;
  repair: RepairItem[];
  total_amount?: number;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type ComplaintOrderDetailsTableProps = {
  data?: ComplaintsOrderDetailsProps | null;
};

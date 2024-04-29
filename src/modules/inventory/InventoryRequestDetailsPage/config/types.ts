/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableHeaderProps = string;

export type InventoryRequestInfoDetailsProps = {
  headerData: TableHeaderProps[];
  itemData: ResponseData;
};

export type ResponseData = {
  createdAt: string;
  id: string;
  note: string;
  parts: string[];
  product: {
    brand_name: string;
    repair_count: number;
    repair: string;
    category_name?: string;
    repair_status?: string;
    received_date?: string;
  };
  serial_number: string;
  status: string;
  updatedAt: string;
  user: {
    id: string;
    Engineer: string;
    Skill: string[];
    branch: string;
    role?: string;
    asp?: string[];
  };
  repair?: RepairItem;
  repairItem?: {
    id?:string
  };
  asp: string[];
  branch: string;
  needsPasswordChange: boolean;
  power: string[];
  role: string;
  warranty: boolean;
  _id: string;
};

export type RepairItem = {
  branch: string;
  brand_name: string;
  category_name: string;
  createdAt: string;
  id: string;
  received_date: string;
  repair_status: string;
  turnaround_time: string | null;
  updatedAt: string;
  warranty: boolean;
  order_number?: string;
  total_charge?: number;
};

// export type NonWarrantyCustomer = {
//   Nonwarrentycustomer: string;
//   Nonwarrentycustomer_contact_number: string;
// };

// export type Engineer = {
//   branch: string;
//   createdAt: string;
//   id: string;
//   needsPasswordChange: boolean;
//   power: string[];
//   role: string;
//   updatedAt: string;
// };

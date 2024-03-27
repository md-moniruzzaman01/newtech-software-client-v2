/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes, ReactNode } from "react";

// button props
export type ButtonProps = {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  status?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  icon?: string;
  primary?: boolean;
  ghost?: boolean;
  btn_outline?: boolean;
  mini?: boolean;
  danger?: boolean;
  small?: boolean;
  link?: boolean;
  transparent?: boolean;
};

export type InventoryTableFilterProps = {
  header: string;
};

export type InventoryChartTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: TableBodyProps[];
};

export type complaintDetailsCardProps = {
  headerTitle?: string;
  className?: string;
  CardInformation: complaintSingleDetailsProps[];
};
export type complaintSingleDetailsProps = {
  label: string;
  value: string;
};
export type TableProps = {
  HeaderData: TableHeaderProps[];
  itemData: TableBodyProps[];
  view?: boolean;
  Link?: string;
};

export type TableWithPhotoProps = {
  HeaderData?: string[];
  link?: string;
  checkedRows?: number[];
  handleCheckboxChange: (index: number) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data?: number[];
};

export type CustomerDetailsTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: CustomerDetailsTableBodyProps[];
  link?: string;
};
export type EmployeeDetailsTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: CustomerDetailsTableBodyProps[];
  link?: string;
};
export type CustomerInfoTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: CustomerInfoTableBodyProps[];
  link?: string;
};
export type InventoryInfoTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: CustomerInfoTableBodyProps[];
  link?: string;
};

export type CustomerInfoTableBodyProps = {
  id?: string;
  order_id: string;
  created_at: string;
  due_date: string;
  customer_name: string;
  items: string;
  problem: string;
  brand_name: string;
  engineer: string;
  status: string;
};

export type CustomerDetailsTableBodyProps = {
  id?: string;
  order_id: string;
  created_at: string;
  due_date: string;
  customer_name: string;
  items: string;
  problem: string;
  brand_name: string;
  engineer: string;
  status: string;
};

export type TableHeaderProps = string;
export type TableBodyProps = {
  id?: string;
  order_id: string;
  created_at: string;
  due_date: string;
  customer_name: string;
  items: string;
  problem: string;
  brand_name: string;
  engineer: string;
  status: string;
};

export type SearchBarProps = {
  link?: string;
  linkBtn?: string;
  isDropdown?: boolean;
  dropdown?: boolean;
  dropdownPlaceHolder?: string;
  setSelectEngineer?: any;
  filtersOptions?: {
    value: string;
    _id: string;
    name?: { firstName?: string; middleName?: string; lastName?: string };
  }[];
};

export type ComplaintMiniCardProps = {
  header?: string;
  name?: string;
  img?: string;
  notes?: string;
};

export type InventoryRequestDetailsCardProps = {
  header?: string;
  className?: string;
  name?: string;
  designation?: string;
  team?: string;
  contact?: string;
};

export type InventoryRequestInfoDetailsProps = {
  headerData: TableHeaderProps[];
};

export type UserEvent = {
  userId: string;
  role: string;
  Skill: string[];
  power: string[];
  asp: string[];
  iat: number;
  exp: number;
};

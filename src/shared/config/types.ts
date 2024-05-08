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
  title: string;
  value: string | number;
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
  fnBtn?: boolean;
  link?: boolean;
  linkValue?: string;
  linkBtn?: string;
  isDropdown?: boolean;
  dropdown?: boolean;
  dropdownPlaceHolder?: string;
  handleSubmit?: any;
  itemsId?: string[];
  filtersOptions?: {
    value: string;
    id: string;
    name?: { firstName?: string; middleName?: string; lastName?: string };
  }[];
  isTrue?: boolean;
  checkedRows?: string[];
  handleDelivery?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleDelete?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleReturn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isMiddleBtn?: boolean;
  disabled?: boolean;
  handleBillGenerate?: () => void;
  generateBtnLoading?: boolean;
  isMiddleBtnActive?: string;
  isDeliveryLoading?: boolean;
  isReturnLoading?: boolean;
  isDeleteLoading?: boolean;
};

export type ComplaintMiniCardProps = {
  header?: string;
  name?: string | number;
  img?: string;
  notes?: string;
};

export type InventoryRequestDetailsCardProps = {
  header?: string;
  className?: string;
  nameTitle?: string;
  name?: string;
  designationTitle?: string;
  designation?: string;
  teamTitle?: string;
  team?: string;
  contactTitle?: string;
  contact?: string;
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

export type partnerProps = {
  name?: string;
  contact_number?: string;
  email?: string;
  address?: string;
};

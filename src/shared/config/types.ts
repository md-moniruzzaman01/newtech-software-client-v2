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
  onClick?: () => void;
  children?: ReactNode;
  icon?: string;
  primary?: boolean;
  ghost?: boolean;
  btn_outline?: boolean;
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
  HeaderData: TableHeaderProps[];
  itemData?: TableBodyProps[];
  link?: string;
};
export type CustomerDetailsTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: CustomerDetailsTableBodyProps[];
  link?: string;
};
export type CustomerInfoTableProps = {
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
  normalBtn?: string;
  isNeedFilter?: boolean;
  filterPlaceHolder?: string;
};

// export type ComplaintMiniCardObject = {
//   header?: string;
//   name?: string;
//   img?: string;
//   notes?: string;
// };
export type ComplaintMiniCardProps = {
  header?: string;
  name?: string;
  img?: string;
  notes?: string;
};

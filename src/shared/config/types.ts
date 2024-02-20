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
};

export type complaintDetailsCardProps = {
  headerTitle?: string;
  className?: string;
  Cardinfo: complaintSingleDetailsProps[]
}
export type complaintSingleDetailsProps = {
  label: string;
  value: number;
}
export type TableProps = {
  HeaderData: TableHeaderProps[];
  itemData: TableBodyProps[];
}
export type TableHeaderProps = string
export type TableBodyProps = {
  order_id: string;
  created_at: string;
  due_date: string;
  customer_name: string;
  items: string;
  problem: string;
  brand_name: string;
  engineer: string;
  status: string;
}
export type ComplaintsTableProps = {
  HeaderData: TableHeaderProps[];
  itemData: TableBodyProps[];
  view?: boolean;
  Link?: string;
};

export type TableHeaderProps = string;
export type TableBodyProps = {
  _id?: string;
  order_number?: string;
  products?: { serial_number?: string; model_number?: string };
  customer?: { contact_person?: string };
  brand_name?: string;
  model_no?: string;
  qc_name?: string;
  qa_name?: string;
  partrequest?: string[];
  repair_status?: string;
  received_date?: string;
};

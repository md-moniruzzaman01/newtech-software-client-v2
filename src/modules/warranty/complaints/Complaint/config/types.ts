export type ComplaintsTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: TableBodyProps[];
  view?: boolean;
  Link?: string;
};

export type TableHeaderProps = string;
export type TableBodyProps = {
  _id?: string;
  order_number?: string;
  products?: {
    model_number?: string;
    brand_name?: string;
    serial_number?: string;
  };
  customer?: { contact_person?: string };
  brand_name?: string;
  partrequest?: string;
  repair_status?: string;
  received_date?: string;
};

export type QCTableProps = {
  HeaderData: QCTableHeaderProps[];
  itemData?: QCTableBodyProps[];
  Link?: string;
  checkedRows?: string[];
  handleCheckboxChange: (index: string) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type QCTableHeaderProps = string;
export type QCTableBodyProps = {
  _id?: string;
  order_number?: string;
  products?: {
    id?: string;
    model_number?: string;
    serial_number?: string;
  };
  Qc?: {
    id?: string;
    user_name?: string;
  };
  RepairItem?: {
    id?: string;
    user_name?: string;
  };
  Qa?: {
    id?: string;
    user_name?: string;
  };
  category_name?: string;
  customer?: { contact_person?: string };
  Nonwarrentycustomer?: { name?: string };
  brand_name?: string;
  partrequest?: string;
  repair_status?: string;
  received_date?: string;
};

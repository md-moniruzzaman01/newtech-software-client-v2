export type MyQATableHeaderProps = string;
export type MyQATableBodyProps = {
  id?: string;
  serial_number?: string;

  user_name?: string;
  status?: string;
  qcImage?: string[];
  rma?: string;
  repair?: {
    id?: string;
    order_number?: string;
    brand_name?: string;
    category_name?: string;
    received_date?: Date;
  };
  createdAt?: Date;
};

export type MyQATableProps = {
  HeaderData: MyQATableHeaderProps[];
  itemData?: MyQATableBodyProps[];
  Link?: string;
  checkedRows?: { qc_id: string; repair_id: string }[];
  handleCheckboxChange: (qc_id: string, repair_id: string) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type MyQCTableHeaderProps = string;
export type MyQCTableBodyProps = {
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

export type MyQCTableProps = {
  HeaderData: MyQCTableHeaderProps[];
  itemData?: MyQCTableBodyProps[];
  Link?: string;
  checkedRows?: string[];
  handleCheckboxChange: (index: string) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

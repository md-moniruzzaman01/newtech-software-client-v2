export type EngineerTableProps = {
  HeaderData: EngineerTableHeaderProps[];
  itemData?: EngineerTableBodyProps[];
  Link?: string;
  checkedRows?: string[];
  handleCheckboxChange: (index: string) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type EngineerTableHeaderProps = string;
export type EngineerTableBodyProps = {
  id?: string;
  serial_number?: string;
  model_number?: string;
  category?: string;
  problems?: string[];
  attachments?: string[];
  category_name?: string;
  brand_name?: string;
  repair_status?: string;
  repair_count?: number;
  warranty?: boolean;
  turnaround_time?: Date;
  received_date?: string;
  repair?: {
    id?: string;
    order_number?: string;
    branch?: string;
  }[];
};

export type EngineerDateProps = {
  id?: string;
  user?: string;
};

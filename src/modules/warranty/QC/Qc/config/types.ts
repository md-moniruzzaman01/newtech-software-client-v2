export type QCTableProps = {
  HeaderData: QCTableHeaderProps[];
  itemData?: QCTableBodyProps[];
  Link?: string;
  checkedRows?: number[];
  handleCheckboxChange: (index: number) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type QCTableHeaderProps = string;
export type QCTableBodyProps = {
  value?: string;
};

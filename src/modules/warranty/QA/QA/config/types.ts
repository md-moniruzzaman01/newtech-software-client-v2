export type QATableProps = {
  HeaderData: QATableHeaderProps[];
  itemData?: QATableBodyProps[];
  Link?: string;
  checkedRows?: number[];
  handleCheckboxChange: (index: number) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type QATableHeaderProps = string;
export type QATableBodyProps = {
  value?: string;
};

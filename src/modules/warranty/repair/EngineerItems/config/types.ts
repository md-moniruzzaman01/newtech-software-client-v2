export type EngineerTableProps = {
  HeaderData: EngineerTableHeaderProps[];
  itemData?: EngineerTableBodyProps[];
  Link?: string;
  checkedRows?: number[];
  handleCheckboxChange: (index: number) => void;
  handleAllCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type EngineerTableHeaderProps = string;
export type EngineerTableBodyProps = {
  value?: string;
};

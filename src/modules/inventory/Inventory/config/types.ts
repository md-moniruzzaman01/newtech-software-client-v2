export type InventoryInfoTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: ResponseData[];
  link?: string;
};
export type TableHeaderProps = string;

export type ResponseData = {
  createdAt: string;
  id: string;
  note: string;
  parts: string[];
  product: string;
  repair: string;
  serial_number: string;
  status: string;
  updatedAt: string;
  user: {
    id: string;
    Engineer: string;
    Skill: string[];
    branch: string;
  };
  asp: string[];
  branch: string;
  needsPasswordChange: boolean;
  power: string[];
  role: string;
  warranty: boolean;
  _id: string;
};

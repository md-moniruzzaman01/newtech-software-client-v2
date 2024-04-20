export type TableHeaderProps = string;

export type InventoryRequestInfoDetailsProps = {
  headerData: TableHeaderProps[];
  itemData: ResponseData;
};

export type ResponseData = {
  createdAt: string;
  id: string;
  note: string;
  parts: string[];
  product: { brand_name: string; repair_count: number };
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

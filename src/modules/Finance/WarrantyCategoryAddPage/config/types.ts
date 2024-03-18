export type addCategoryProps = {
  value: string;
  category: string;
  basicServiceCharge: string;
  brand: string;
  NTF?: string | false;
  CN?: string | false;
  CID?: string | false;
  swap?: string | false;
};

export type complaintAddProps = {
  data?: addCategoryProps[];
};

export type addCategoryProps = {
  value: string;
  category: string;
  basic_service_charge: number;
  brand?: string;
  NTF?: number;
  CN?: number;
  CID?: number;
  swap?: number;
};

export type complaintAddProps = {
  data?: addCategoryProps[];
};
// value: string;
// brand: string;
// category: string;
// basic_service_charge: number;
// NTF: number;
// CN: number;
// CID: number;
// swap: number;

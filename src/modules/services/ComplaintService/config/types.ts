export type ComplaintServiceProps = {
  onClick?: (() => void) | undefined;
};

export type updateAddedItemProps = {
  brand_name: string;
  model_number: string;
  serial_number: string;
  remark: string;
  problem: string;
};

export type partnerProps = {
  customer_name?: string;
  contact_number?: string;
  email?: string;
  address?: string;
};

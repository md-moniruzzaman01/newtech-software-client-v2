export type ComplaintServiceProps = {
  onClick?: (() => void) | undefined;
};

export type updateAddedItemProps = {
  product_or_items_name: string;
  brand_name: string;
  model_number: string;
  serial_number: string;
  // warranty_type: string;
  remark: string;
  branch_name: string;
  problem: string;
};

export type partnerProps = {
  customer_name?: string;
  contact_number?: string;
  email?: string;
  address?: string;
};

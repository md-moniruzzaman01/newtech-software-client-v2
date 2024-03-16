export type ComplaintServiceProps = {
  onClick?: (() => void) | undefined;
};

export type warrantyUpdateAddedItemProps = {
  product_or_items_name?: string;

  model_number?: string;
  serial_number?: string;
  warranty_type?: string;
  remark?: string;
  branch_name?: string;
  problem?: string;
};

export type warrantyPartnerProps = {
  partner_name?: string;
  contact_number?: string;
  email?: string | false;
  address?: string | false;
  brand_name?: string;
};

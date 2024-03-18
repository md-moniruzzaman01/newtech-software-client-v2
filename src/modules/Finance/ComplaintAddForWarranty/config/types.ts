export type ComplaintServiceProps = {
  onClick?: (() => void) | undefined;
};

export type warrantyUpdateAddedItemProps = {
  product_or_items_name?: string;
  category?: string;
  main_category?: string;
  model_number?: string;
  serial_number?: string;
  remark?: string;
  problems?: string;
};

export type warrantyPartnerProps = {
  partner_name?: string;
  contact_number?: string;
  email?: string | undefined;
  address?: string | undefined;
  brand_name?: string;
};

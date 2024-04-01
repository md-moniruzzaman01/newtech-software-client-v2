export type ComplaintServiceProps = {
  onClick?: (() => void) | undefined;
};

export type updateAddedItemProps = {
  brand_name: string;
  model_number: string;
  serial_number: string;
  attachments: string;
  problems: string;
  category_name?: string;
  category: string;
  categoryValue?: string;
};

export type partnerProps = {
  partner_name?: string;
  contact_number?: string;
  email?: string;
  address?: string;
};

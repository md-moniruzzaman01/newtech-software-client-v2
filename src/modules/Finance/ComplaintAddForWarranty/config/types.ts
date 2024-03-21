export type ComplaintServiceProps = {
  onClick?: (() => void) | undefined;
};

export type warrantyUpdateAddedItemProps = {
  category?: string;
  main_category?: string;
  model_number?: string;
  serial_number?: string;
  attachments?: string;
  problems?: string;
};

export type warrantyPartnerProps = {
  partner_id?: string;
  contact_number?: string;
  email?: string | undefined;
  address?: string | undefined;
  brand_name?: string;
};

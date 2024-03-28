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
  category_name?: string;
  categoryValue?: string | undefined;
  mainCategoryValue?: string | undefined;
};

export type warrantyPartnerProps = {
  partner_id?: string;
  contact_number?: string;
  contactNo?: string;
  email?: string | undefined;
  address?: string | undefined;
  brand_name?: string;
  partner_name?: string | undefined;
  brandValue?: string;
};

export type PartnerProps = {
  id?: string;
  _id?: string;
  contact_person?: string;
  company?: string;
  partner_id?: string;
  contactNo?: string;
};

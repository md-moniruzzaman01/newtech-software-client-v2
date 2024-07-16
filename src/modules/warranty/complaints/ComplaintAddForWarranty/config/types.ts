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
  isWindowsInstallations?: boolean;
  isSSDOrHDDFullFormat?: boolean;
  isDoa?: boolean;
};

export type warrantyPartnerProps = {
  partner_id?: string | undefined;
  contact_number?: string | undefined;
  contactNo?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  brand_name?: string | undefined;
  partner_name?: string | undefined;
  brandValue?: string | undefined;
};

export type PartnerProps = {
  id?: string;
  _id?: string;
  contact_person?: string;
  company?: string;
  partner_id?: string;
  contactNo?: string;
};

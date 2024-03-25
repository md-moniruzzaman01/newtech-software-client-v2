export type PartnerProps = {
  label?: string;
  value?: string;
  contact_person?: string;
  company?: string;
  _id?: string;
  id?: string;
  contactNo?: string;
};

export type SelectForPartnerProps = {
  Filter: PartnerProps[];
  label?: string;
  IsDisabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  inputName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectPartner?: any;
  selectPartner?: PartnerProps | null;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

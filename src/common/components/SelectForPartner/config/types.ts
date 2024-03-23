export type SelectForPartnerProps = {
  Filter: {
    label?: string;
    value?: string;
    contact_person?: string;
    company?: string;
    _id?: string;
  }[];
  label?: string;
  IsDisabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  inputName?: string;
};

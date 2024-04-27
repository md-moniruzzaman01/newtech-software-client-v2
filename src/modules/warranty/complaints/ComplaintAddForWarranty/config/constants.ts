export const brandOptions = [
  { label: " MSI", value: "msi" },
  { label: "ACER", value: "acer" },
  { label: "D-Link", value: "d-link" },
];

export type PartnerProps = {
  _id: string;
  contact_person: string;
  company: string;
  // Add other properties if necessary
};

export const defaultPartnerInfoStatic = {
  partner_id: "",
  partner_name:"",
  contact_number: "",
  contactNo:"",
  brand_name: "",
  brand_value: "",
  email:"",
  address:""
};

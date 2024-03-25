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

export const defualtpartnerInfo = {
  partner_id: "",
  contact_number: "",
  brand_name: "",
};

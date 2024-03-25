import { PartnerProps } from "../config/types";

export const defaultPartner = (
  partnerInfo: PartnerProps,
  partners: PartnerProps[]
): PartnerProps | null => {
  if (partnerInfo && partners) {
    const defaultPartner = partners.find(
      (partner) => partner.id === partnerInfo.partner_id
    );
    if (defaultPartner) {
      return defaultPartner;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

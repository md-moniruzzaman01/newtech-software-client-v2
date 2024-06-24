import { PartnerProps } from "../config/types";

export const defaultPartner = (
  partnerInfo: PartnerProps,
  partners: PartnerProps[]
): PartnerProps | "" => {
  if (partnerInfo?.partner_id && partners) {
    const defaultPartner = partners.find(
      (partner) => partner._id === partnerInfo.partner_id
    );

    if (defaultPartner) {
      return defaultPartner;
    } else {
      return "";
    }
  } else {
    return "";
  }
};

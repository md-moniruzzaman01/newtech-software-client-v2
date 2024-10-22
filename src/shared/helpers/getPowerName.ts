import { engineerPower } from "../config/constaints";

export const getPowerName = (id: string) => {
  const branchName: { id: string; value: string } | undefined =
    engineerPower?.find((power) => power?.id === id);
  return branchName?.value;
};

import { branches } from "../config/constaints";

export const getBranchName = (id: string, brand = false) => {
  if (!brand) {
    const branchName = branches?.find((item) => item.id === id);
    return branchName?.value;
  } else {
    const branchName = branches?.find((item) => item.id === id);
    return branchName?.value;
  }
};

import { branches } from "../config/constaints";

export const getBranchName = (id: string) => {
  const branchName: { id: string; value: string } | undefined = branches?.find(
    (branch) => branch?.id === id
  );
  return branchName?.value;
};

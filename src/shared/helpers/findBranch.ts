import { branches } from "../config/constaints";

export const findBranch = (id: string) => {
  const branchName: { id: string; value: string } | undefined = branches?.find(
    (branch) => branch?.id === id
  );
  return branchName?.value;
  return branchName?.value;
};

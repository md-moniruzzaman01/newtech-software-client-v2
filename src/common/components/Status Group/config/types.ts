/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableStatusProps = {
  btnValues: string[];
};

export type statusGroupProps = {
  btnGroupValue?: { label?: string; value?: string }[];
  handleDeleteData?: any;
  handleReturnData?: any;
  handleReturnToCN?: any;
  isSelected?: boolean;
  status?: boolean;
  dltBtnValue?: string;
  returnBtnValue?: string;
  returnCNBtnValue?: string;
  isReturnLoading?: boolean;
  isDeleteLoading?: boolean;
  isReturnCNLoading?: boolean;
  isDisabledCNBtn?: boolean;
};

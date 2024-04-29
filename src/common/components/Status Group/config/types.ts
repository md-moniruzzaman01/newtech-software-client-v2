/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableStatusProps = {
  btnValues: string[];
};

export type statusGroupProps = {
  btnGroupValue?: { label?: string; value?: string }[];
  handleDeleteData?: any;
  handleReturnData?: any;
  isSelected?: boolean;
  isButton?: boolean;
  status?: boolean;
  dltBtnValue?: string;
  returnBtnValue?: string;
  isReturnLoading?: boolean;
  isDeleteLoading?: boolean;
};

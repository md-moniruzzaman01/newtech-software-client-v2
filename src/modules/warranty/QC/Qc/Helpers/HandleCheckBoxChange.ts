/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleCheckboxChange = (
  index: string,
  setCheckedRows: any,
  checkedRows: string[]
) => {
  if (checkedRows.includes(index)) {
    setCheckedRows(checkedRows.filter((item) => item !== index));
  } else {
    setCheckedRows([...checkedRows, index]);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */

export const handleCheckboxChange = (index: string,checkedRows:string[],setCheckedRows:any) => {
    if (checkedRows && checkedRows?.includes(index)) {
        setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
        setCheckedRows([...checkedRows, index]);
    }
  };
  export const handleAllCheckboxChange = (checkedRows:string[],setCheckedRows:any,items:any) => {
    if (checkedRows.length === items?.length) {
        setCheckedRows([]);
    } else {
      const allIds =
      items?.map((item) => item?.id).filter((id) => id !== undefined) ||
        [];
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };
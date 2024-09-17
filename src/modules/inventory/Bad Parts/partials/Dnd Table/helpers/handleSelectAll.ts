/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleSelectAll = ({ data, checkedRows, setCheckedRows }) => {
  const allIdsOnPage = data.map((item: any) => ({
    id: item?.id,
    serial_number: item?.products?.serial_number,
  }));

  const isAllChecked = allIdsOnPage.every((item) =>
    checkedRows.some(
      (row) => row.id === item.id && row.serial_number === item.serial_number
    )
  );

  const newCheckedRows = isAllChecked
    ? checkedRows.filter(
        (row) =>
          !allIdsOnPage.some(
            (item) =>
              item.id === row.id && item.serial_number === row.serial_number
          )
      )
    : [
        ...checkedRows,
        ...allIdsOnPage.filter(
          (item) =>
            !checkedRows.some(
              (row) =>
                row.id === item.id && row.serial_number === item.serial_number
            )
        ),
      ];

  setCheckedRows(newCheckedRows);
};

export const handleRowSelect = ({ item, checkedRows, setCheckedRows }) => {
  const itemId = {
    id: item?.id,
    serial_number: item?.products?.serial_number,
  };

  const isAlreadyChecked = checkedRows.some((row) => row.id === itemId.id);

  const newCheckedRows = isAlreadyChecked
    ? checkedRows.filter((row) => row.id !== itemId.id)
    : [...checkedRows, itemId];
  console.log("newCheckedRows", newCheckedRows);
  setCheckedRows(newCheckedRows);
};

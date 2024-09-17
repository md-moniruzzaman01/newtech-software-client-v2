export const handleDrop = ({ item, setCheckedRows, data }) => {
  const droppedItem = data[item.index];
  setCheckedRows((prevCheckedRows) => {
    if (!prevCheckedRows.find((row) => row.id === droppedItem.id)) {
      return [
        ...prevCheckedRows,
        {
          id: droppedItem?.id,
          serial_number: droppedItem.products?.serial_number,
        },
      ];
    }
    return prevCheckedRows;
  });
};

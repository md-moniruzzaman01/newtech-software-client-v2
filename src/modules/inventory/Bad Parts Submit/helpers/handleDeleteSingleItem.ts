export const handleDeleteSingleItem = ({ setCheckedRows, id }) => {
  setCheckedRows((prevCheckedRows) =>
    prevCheckedRows.filter((row) => row.id !== id)
  );
};

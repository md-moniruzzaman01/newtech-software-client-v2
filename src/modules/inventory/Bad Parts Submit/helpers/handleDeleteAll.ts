import { removeFromLocalStorage } from "../../../../shared/helpers/local_storage";

export const handleAllDelete = ({ setCheckedRows }) => {
  setCheckedRows([]);
  removeFromLocalStorage("selectedItem");
};

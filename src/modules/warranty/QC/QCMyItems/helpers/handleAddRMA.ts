/* eslint-disable @typescript-eslint/no-explicit-any */
import { authKey } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { showSwal } from "../../../../../shared/helpers/SwalShower";

export const handleAddRMA = async (rma, id, addRMA, setIsOpen) => {
  const token = getFromLocalStorage(authKey);
  const fullData = {
    rma,
    qcImage: [],
  };
  const result: any = await addRMA({ fullData, token, id });

  const swalIsTrue = showSwal(result);
  if (swalIsTrue) {
    setIsOpen(false);
  }
};

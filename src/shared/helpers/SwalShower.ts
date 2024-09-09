import swal from "sweetalert";
import { removeUserInfo } from "../../services/auth.service";
import { authKey } from "../config/constaints";

export const showSwal = (result) => {
  if (result?.data?.success) {
    swal({
      title: "Success",
      text: result.data.message,
      icon: "success",
      timer: 1000,
    });

    return true;
  } else {
    const errorStatus = result?.error?.status;
    const errorMessage =
      result?.error?.data?.message || "Unknown error occurred";

    if (errorStatus === 403 || errorStatus === 401) {
      removeUserInfo(authKey);
      swal({
        title: "Error",
        text: errorMessage,
        icon: "error",
      }).then(() => {
        window.location.href = "/login";
      });
    } else {
      swal("Error", errorMessage, "error");
      return false;
    }
  }
};

import swal from "sweetalert";

export const showSwal = (result) => {
  if (result?.data?.success) {
    swal("Success", `${result?.data?.message}`, "success");
  } else {
    swal("Error", `${result?.error?.data?.message}`, "error");
  }
};

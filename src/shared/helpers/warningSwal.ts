/* eslint-disable @typescript-eslint/no-explicit-any */
import swal from "sweetalert";

export const WarningSwal = (
  handleSubmit: any,
  id?: string,
  customFirstMessage?: string,
  customCancelMessage?: string
) => {
  swal({
    title: "Are you sure?",
    text:
      customFirstMessage ||
      "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: [true, true],
  }).then((willDelete) => {
    if (willDelete) {
      handleSubmit(id);
    } else {
      swal(customCancelMessage || "Your imaginary data is safe!");
    }
  });
};

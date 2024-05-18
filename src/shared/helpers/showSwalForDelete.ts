// /* eslint-disable @typescript-eslint/no-explicit-any */
// import swal from "sweetalert";
// import { showSwal } from "./SwalShower";

// export const showSwalForDelete = async (
//   firstText = "data",
//   functionName: any,
//   token: string,
//   fullData: any
// ) => {
//   swal({
//     title: "Are you sure?",
//     text: `Once deleted, you will not be able to recover this ${firstText}`,
//     icon: "warning",
//     buttons: ["Cancel", "OK"], // Set button labels
//     dangerMode: true,
//   }).then(async (willDelete) => {
//     if (willDelete) {
//       const result = await functionName({ token, fullData });
//       const swalIsTrue = showSwal(result);
//       console.log("hello", swalIsTrue);
//       return swalIsTrue === true ? true : false;
//     } else {
//       swal(`Your ${firstText} is safe!`);
//     }
//   });
// };

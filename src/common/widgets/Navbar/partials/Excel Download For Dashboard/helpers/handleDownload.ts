import { authKey } from "../../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../../shared/helpers/local_storage";

export const handleDownload = (query, startDate, endDate) => {
  const token = getFromLocalStorage(authKey);
  console.log("query", query);
  const apiUrl = `${import.meta.env.VITE_SERVER_URL}/utils/download?${query}`;
  fetch(apiUrl, {
    method: "GET",
    headers: {
      authorization: token,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      startDate && endDate
        ? (a.download = `NEWTECH-report-from${startDate}-to-${endDate}.xlsx`)
        : (a.download = `NEWTECH-Report.xlsx`);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      swal("Error!", error.message, "error");
    });
};

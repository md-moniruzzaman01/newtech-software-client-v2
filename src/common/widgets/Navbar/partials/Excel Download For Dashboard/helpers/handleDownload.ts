import { authKey } from "../../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../../shared/helpers/local_storage";
import swal from "sweetalert";

export const handleDownload = async (
  startDate,
  endDate,
  brandId,
  setIsLoading
) => {
  try {
    console.log("id", brandId);
    setIsLoading(true);
    const token = getFromLocalStorage(authKey);

    const apiUrl = `${import.meta.env.VITE_SOME_KEY}/utils/download`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate, endDate, brandId }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch the report. Please try again.");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download =
      startDate && endDate
        ? `NEWTECH-report-from${startDate}-to-${endDate}.xlsx`
        : `NEWTECH-Report.xlsx`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    setIsLoading(false);
  } catch (error) {
    swal("Error!", error.message, "error");
    setIsLoading(false);
  }
};

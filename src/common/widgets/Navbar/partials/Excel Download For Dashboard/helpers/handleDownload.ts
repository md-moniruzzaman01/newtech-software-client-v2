import { authKey } from "../../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../../shared/helpers/local_storage";

export const handleDownload = async (startDate, endDate) => {
  try {
    const token = getFromLocalStorage(authKey);

    const apiUrl = `${import.meta.env.VITE_SOME_KEY}/utils/download`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate, endDate }),
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
  } catch (error) {
    console.error("Download Error:", error);
    swal("Error!", error.message, "error");
  }
};

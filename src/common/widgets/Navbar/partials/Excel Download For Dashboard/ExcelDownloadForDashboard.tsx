import { useSearchParams } from "react-router-dom";
import Button from "../../../../components/Button";
import { handleDownload } from "./helpers/handleDownload";
import { icons } from "../../../../../shared/libs/Icons";

const ExcelDownloadForDashboard = () => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  return (
    <div>
      <abbr
        title={
          !startDate || !endDate
            ? "To download, please filter by date first."
            : ""
        }
      >
        <Button
          disabled={!startDate || !endDate}
          icon={icons?.excel}
          onClick={() => handleDownload(startDate, endDate)}
        >
          Download
        </Button>
      </abbr>
    </div>
  );
};

export default ExcelDownloadForDashboard;

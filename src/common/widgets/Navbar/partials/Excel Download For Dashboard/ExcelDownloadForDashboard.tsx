import { useSearchParams } from "react-router-dom";
import Button from "../../../../components/Button";
import { handleDownload } from "./helpers/handleDownload";
import { icons } from "../../../../../shared/libs/Icons";
import { useState } from "react";

const ExcelDownloadForDashboard = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const brandId = searchParams.get("brandId") || "";
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
          loading={isLoading}
          disabled={!startDate || !endDate}
          icon={icons?.excel}
          onClick={() =>
            handleDownload(startDate, endDate, brandId, setIsLoading)
          }
        >
          Download
        </Button>
      </abbr>
    </div>
  );
};

export default ExcelDownloadForDashboard;

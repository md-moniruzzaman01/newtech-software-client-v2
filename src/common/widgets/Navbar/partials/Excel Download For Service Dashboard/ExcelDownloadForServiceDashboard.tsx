import { useSearchParams } from "react-router-dom";
import Button from "../../../../components/Button";
import { handleDownload } from "./helpers/handleDownload";
import { icons } from "../../../../../shared/libs/Icons";

const ExcelDownloadForServiceDashboard = () => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  return (
    <div>
      <Button
        icon={icons?.excel}
        onClick={() => handleDownload(startDate, endDate)}
      >
        Download
      </Button>
    </div>
  );
};

export default ExcelDownloadForServiceDashboard;

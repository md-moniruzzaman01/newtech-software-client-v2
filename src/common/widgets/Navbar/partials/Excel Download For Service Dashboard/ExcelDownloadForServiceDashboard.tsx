import { useSearchParams } from "react-router-dom";
import Button from "../../../../components/Button";
import { handleDownload } from "./helpers/handleDownload";

const ExcelDownloadForServiceDashboard = () => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  return (
    <div>
      <Button onClick={() => handleDownload(startDate, endDate)}>
        Excel Download
      </Button>
    </div>
  );
};

export default ExcelDownloadForServiceDashboard;

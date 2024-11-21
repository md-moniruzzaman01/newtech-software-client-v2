import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../../shared/helpers/constructQuery";
import Button from "../../../../components/Button";
import { handleDownload } from "./helpers/handleDownload";
import { fields, keys } from "./config/constant";

const ExcelDownloadForDashboard = () => {
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  return (
    <div>
      <Button onClick={() => handleDownload(query, startDate, endDate)}>
        Excel Download
      </Button>
    </div>
  );
};

export default ExcelDownloadForDashboard;

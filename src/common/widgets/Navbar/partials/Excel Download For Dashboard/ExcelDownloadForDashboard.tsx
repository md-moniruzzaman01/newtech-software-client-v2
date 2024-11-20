import Button from "../../../../components/Button";
import { handleDownload } from "./helpers/handleDownload";

const ExcelDownloadForDashboard = () => {
  return (
    <div>
      <Button onClick={handleDownload}>Excel Download</Button>
    </div>
  );
};

export default ExcelDownloadForDashboard;

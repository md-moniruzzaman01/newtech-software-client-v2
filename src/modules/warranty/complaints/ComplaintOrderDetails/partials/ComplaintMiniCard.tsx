import { emptyData } from "../../../../../shared/config/constaints";
import { ComplaintMiniCardProps } from "../../../../../shared/config/types";

const ComplaintMiniCard: React.FC<ComplaintMiniCardProps> = ({
  name,
  status,
  notes,
  date,
  note,
}) => {
  return (
    <div className="text-center bg-solidWhite py-5 space-y-2 rounded-lg">
      <div className=" text-center space-y-3 overflow-x-auto">
        <p className="overflow-x-auto">Serial No: {notes}</p>
        <div className="flex justify-center items-center gap-2 overflow-x-auto">
          <h3 className="font-medium overflow-x-auto">{status}</h3>
        </div>
        <h1 className="font-medium text-xs overflow-x-auto">{name}</h1>
      </div>
      <h1 className="font-medium text-xs overflow-x-auto">
        Note: {note || emptyData}
      </h1>
      <h1 className="font-medium text-xs overflow-x-auto">
        Date: {date || emptyData}
      </h1>
    </div>
  );
};

export default ComplaintMiniCard;

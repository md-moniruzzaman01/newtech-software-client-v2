import { ComplaintMiniCardProps } from "../../../../../shared/config/types";

const ComplaintMiniCard: React.FC<ComplaintMiniCardProps> = ({
  header,
  name,
  notes,
}) => {
  return (
    <div>
      <div className="bg-solidWhite text-center space-y-5 py-5 overflow-x-auto">
        <h1 className="font-medium text-xs overflow-x-auto">{header}</h1>
        <div className="flex justify-center items-center gap-2 overflow-x-auto">
          {/* <div>
            <img className="w-6 rounded-full" src={img} alt="img" />
          </div> */}
          <h3 className="font-medium overflow-x-auto">{name}</h3>
        </div>
        <p className="overflow-x-auto">Serial No: {notes}</p>
      </div>
    </div>
  );
};

export default ComplaintMiniCard;

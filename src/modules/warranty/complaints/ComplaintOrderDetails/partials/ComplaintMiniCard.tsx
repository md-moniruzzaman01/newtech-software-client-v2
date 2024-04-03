import { ComplaintMiniCardProps } from "../../../../../shared/config/types";


const ComplaintMiniCard: React.FC<ComplaintMiniCardProps> = ({
  header,
  name,
  img,
  notes,
}) => {
  return (
    <div>
      <div className="bg-solidWhite text-center space-y-5 py-5">
        <h1 className="font-medium text-lg">{header}</h1>
        <div className="flex justify-center items-center gap-2">
          <div>
            <img className="w-6 rounded-full" src={img} alt="img" />
          </div>
          <h3 className="font-medium">{name}</h3>
        </div>
        <p>Note: {notes}</p>
      </div>
    </div>
  );
};

export default ComplaintMiniCard;

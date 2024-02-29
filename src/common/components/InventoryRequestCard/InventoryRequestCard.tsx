import { InventoryRequestDetailsCardProps } from "../../../shared/config/types";

const InventoryRequestCard: React.FC<InventoryRequestDetailsCardProps> = ({
  className,
  contact,
  designation,
  header,
  name,
  team,
}) => {
  return (
    <div className={`border border-shadeOfLightBlue p-5 ${className}`}>
      <h2 className="font-semibold pb-3">{header}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Name :</span>
          {name}
        </p>
        <p>
          <span className="font-medium">Designation :</span>
          {designation}
        </p>
        <p>
          <span className="font-medium">Team Name :</span>
          {team}
        </p>
        <p>
          <span className="font-medium">Contact No :</span>
          {contact}
        </p>
      </div>
    </div>
  );
};

export default InventoryRequestCard;

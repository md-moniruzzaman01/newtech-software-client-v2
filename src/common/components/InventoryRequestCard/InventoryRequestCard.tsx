import { InventoryRequestDetailsCardProps } from "../../../shared/config/types";

const InventoryRequestCard: React.FC<InventoryRequestDetailsCardProps> = ({
  className,
  contact,
  contactTitle,
  designation,
  designationTitle,
  header,
  name,
  nameTitle,
  teamTitle,
  team,
}) => {
  return (
    <div className={`border border-shadeOfLightBlue p-5 ${className}`}>
      <h2 className="font-semibold pb-3">{header}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-medium">{nameTitle} : </span>
          {name}
        </p>
        <p>
          <span className="font-medium">{designationTitle} : </span>
          {designation}
        </p>
        <p>
          <span className="font-medium">{teamTitle} : </span>
          {team}
        </p>
        <p>
          <span className="font-medium">{contactTitle} : </span>
          {contact}
        </p>
      </div>
    </div>
  );
};

export default InventoryRequestCard;

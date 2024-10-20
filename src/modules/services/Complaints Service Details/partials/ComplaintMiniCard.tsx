import { NavLink } from "react-router-dom";
import { ComplaintMiniCardProps } from "../config/types";
import Button from "../../../../common/components/Button";

const ComplaintMiniCard: React.FC<ComplaintMiniCardProps> = ({
  name,
  status,
  notes,
  link,
  header,
}) => {
  return (
    <div>
      <div className="bg-solidWhite text-center space-y-5 py-5 overflow-x-auto">
        {header && <p className="font-bold">{header}</p>}
        <p className="overflow-x-auto">
          Serial No:{" "}
          {link ? (
            <NavLink to={link}>
              <Button link>{notes}</Button>
            </NavLink>
          ) : (
            <span>{notes}</span>
          )}
        </p>
        <div className="flex justify-center items-center gap-2 overflow-x-auto">
          {/* <div>
            <img className="w-6 rounded-full" src={img} alt="img" />
          </div> */}
          <h3 className="font-medium overflow-x-auto">{status}</h3>
        </div>
        <h1 className="font-medium text-xs overflow-x-auto">{name}</h1>
      </div>
    </div>
  );
};

export default ComplaintMiniCard;

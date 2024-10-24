import { FC } from "react";
import { complaintDetailsCardProps } from "../../../shared/config/types";
import { NavLink } from "react-router-dom";
import { icons } from "../../../shared/libs/Icons";
import { emptyData } from "../../../shared/config/constaints";

const ComplaintDetailsCard: FC<complaintDetailsCardProps> = ({
  headerTitle = "Complaints Details",
  CardInformation,
  className = "",
  link,
}) => {
  const Styles = `bg-solidWhite px-5 space-y-5 py-5 rounded-sm ${className}`;
  return (
    <div className={Styles}>
      <div className="flex justify-between ">
        <h1 className="text-xl font-semibold">{headerTitle} </h1>
        {link && (
          <NavLink className="text-black" to={link}>
            {icons?.link}
          </NavLink>
        )}
      </div>
      {CardInformation &&
        CardInformation?.map((item, index) => (
          <div key={index} className="flex justify-between ">
            <div className="font-medium space-y-2">
              <h4>{item.title}:</h4>
            </div>
            <div className="space-y-2">
              <p> {item.value || emptyData}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComplaintDetailsCard;

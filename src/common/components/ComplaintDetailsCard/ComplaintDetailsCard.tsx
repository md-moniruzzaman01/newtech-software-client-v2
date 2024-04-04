import { FC } from "react";
import { complaintDetailsCardProps } from "../../../shared/config/types";

const ComplaintDetailsCard: FC<complaintDetailsCardProps> = ({
  headerTitle = "Complaints Details",
  CardInformation,
  className = "",
}) => {
  const Styles = `bg-solidWhite px-5 space-y-5 py-5 rounded-sm ${className}`;
  return (
    <div className={Styles}>
      <h1 className="text-xl font-semibold">{headerTitle}</h1>
      {CardInformation &&
        CardInformation?.map((item, index) => (
          <div key={index} className="flex justify-between ">
            <div className="font-medium space-y-2">
              <h4>{item.title}:</h4>
            </div>
            <div className="space-y-2">
              <p> {item.value}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComplaintDetailsCard;

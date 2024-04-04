import { NavLink } from "react-router-dom";
import { DashboardCardProps } from "./config/types";

const DashboardCard: React.FC<DashboardCardProps> = ({
  className,
  icon,
  money,
  title,
  link,
}) => {
  return (
    <div>
      {link ? (
        <NavLink to={`${link}`}>
          <div className={`${className} text-solidBlack  rounded-md`}>
            <div className="flex justify-around items-center min-h-36">
              <div className="space-y-2">
                <h3 className="text-2xl ">{title}</h3>
                <h2 className="text-4xl font-semibold">{money}</h2>
              </div>
              {icon && <div className="text-5xl">{icon}</div>}
            </div>
          </div>
        </NavLink>
      ) : (
        <div className={`${className} text-solidBlack  rounded-md`}>
          <div className="flex justify-around items-center min-h-36">
            <div className="space-y-2">
              <h3 className="text-2xl ">{title}</h3>
              <h2 className="text-4xl font-semibold">{money}</h2>
            </div>
            {icon && <div className="text-5xl">{icon}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;

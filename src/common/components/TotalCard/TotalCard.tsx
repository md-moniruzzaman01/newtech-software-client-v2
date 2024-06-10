import { DashboardCardProps } from "./config/types";

const TotalCard: React.FC<DashboardCardProps> = ({ className, data = [] }) => {
  return (
    <div>
      <div
        className={`${className} text-solidBlack  rounded-md min-h-36 flex items-center justify-between`}
      >
        <div className="flex-grow">
          {data?.map((item, index) => (
            <div key={index} className="flex justify-between px-5 space-y-2">
              <h5 className="text-lg font-semibold ">{item?.label}:</h5>
              <p className="font-semibold ">{item?.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalCard;

import { FC, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SingleStatus {
  status: string;
  count: number;
}

interface EngineerData {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
}

interface DashboardEngineerCardProps {
  engineer: EngineerData;
  statusCounts: SingleStatus[];
  totalWorked: number;
}

const DashboardEngineerCard: FC<DashboardEngineerCardProps> = ({
  engineer,
  statusCounts,
  totalWorked,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="shadow-md rounded-md mb-5">
      <div
        className="p-5 flex justify-between gap-2 items-center bg-solidWhite rounded-t-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-sm font-medium">
          {engineer.name.firstName} {engineer.name.lastName}
          <p>{engineer.email}</p>
        </div>
        <div className="flex items-center space-x-5">
          <div className="text-xs text-gray-600">
            <p>Total Worked: {totalWorked}</p>
          </div>

          <div>
            {isOpen ? (
              <IoIosArrowUp className="h-6 w-6 text-gray-600" />
            ) : (
              <IoIosArrowDown className="h-6 w-6 text-gray-600" />
            )}
          </div>
        </div>
      </div>
      {isOpen && <hr className="border-grayForBorder border-2" />}
      {isOpen && (
        <div className="p-5 bg-solidWhite rounded-b-md">
          {statusCounts &&
            statusCounts.map((item: SingleStatus, i: number) => (
              <div key={i} className="flex justify-between items-center py-2">
                <h3 className="w-36 text-gray-700 text-sm font-medium">
                  {item.status}
                </h3>
                <div className="w-56 flex-1 bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div
                    className="bg-blue-500 h-1 rounded-full"
                    style={{ width: `${(item.count / totalWorked) * 100}%` }}
                  ></div>
                </div>
                <p className="w-20 text-right text-gray-700 text-sm">
                  {item.count}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DashboardEngineerCard;

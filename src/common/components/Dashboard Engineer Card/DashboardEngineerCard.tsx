import { FC, useState } from "react";
import Modal from "../Modal/Modal"; // Ensure you have this Modal component

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

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleModal}
      className={`relative bg-solidWhite mx-2 shadow-md rounded-md p-4 transition-all duration-300 ease-in-out mb-4 cursor-pointer mt-4`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold">
            {engineer.name.firstName} {engineer.name.lastName}
          </h2>
          <p className="text-gray-600 text-[10px]">{engineer.email}</p>
        </div>
        <p className="text-[10px] text-gray-600 font-semibold">
          Worked: {totalWorked}
        </p>
        <div className="absolute -right-2 -top-2">
          <div className="bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-[10px] font-semibold">
            {statusCounts.length}
          </div>
        </div>
      </div>

      <Modal
        header={`${engineer.name.firstName} ${engineer.name.lastName}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        bgColor="solidWhite"
      >
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-sm font-medium text-gray-800">Summary</h3>
            <p className="text-xs text-gray-600">Total Worked: {totalWorked}</p>
          </div>
        </div>

        {isOpen && (
          <div className="mt-12">
            {statusCounts.map((status, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div className="w-1/3">
                  <h4 className="text-gray-700 text-sm font-medium">
                    {status.status}
                  </h4>
                </div>
                <div className="w-1/3 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${(status.count / totalWorked) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <p className="w-1/3 text-right text-gray-700 text-sm">
                  {status.count} Tasks
                </p>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DashboardEngineerCard;

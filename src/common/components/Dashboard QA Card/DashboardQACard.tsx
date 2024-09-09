import { FC, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button";

interface StatusCount {
  status: string;
  count: number;
}

interface QaCheckerData {
  id: string;
  qa_checker: {
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
  };

  statusCounts: StatusCount[];
  totalChecked: number;
}

interface DashboardQaCheckerCardProps {
  data: QaCheckerData;
}

const DashboardQACard: FC<DashboardQaCheckerCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleDropdown}
      className={`relative bg-white mx-2 shadow-md rounded-md mb-4 p-4 transition-all duration-300 ease-in-out cursor-pointer mt-4`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Button link>
            <h2 className="text-sm font-semibold">{`${data?.qa_checker?.name.firstName} ${data?.qa_checker?.name.lastName}`}</h2>
          </Button>
          <p className="text-xs text-gray-600">{data?.qa_checker?.email}</p>
        </div>
        <p className="text-[10px] text-gray-600">
          Total Checked: {data.totalChecked}
        </p>
        <div className="absolute -right-2 -top-2">
          <div className="bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-[10px] font-semibold">
            {data.statusCounts.length}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={`${data?.qa_checker?.name.firstName} ${data?.qa_checker?.name.lastName}`}
        bgColor="solidWhite"
      >
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-sm font-medium text-gray-800">Summary</h3>
            <p className="text-xs text-gray-600">
              Total Checked: {data.totalChecked}
            </p>
          </div>
        </div>

        {isOpen && (
          <div className="mt-12">
            {data.statusCounts.map((status, index) => (
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
                        width: `${(status.count / data.totalChecked) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <p className="w-1/3 text-right text-gray-700 text-sm">
                  {status.count} Items
                </p>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DashboardQACard;

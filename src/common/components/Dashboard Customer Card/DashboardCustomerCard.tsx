import { FC, useState } from "react";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";
import Button from "../Button";

interface StatusCount {
  status: string;
  count: number;
  value: number;
}

interface CustomerData {
  customer?: { name: string; company: string; id: string };
  statusCounts: StatusCount[];
  totalProducts: number;
  totalValue: number;
}

interface DashboardCustomerCardProps {
  customer: CustomerData;
  nameLink?: string;
}

const DashboardCustomerCard: FC<DashboardCustomerCardProps> = ({
  customer,
  nameLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleDropdown}
      className={`relative bg-solidWhite mx-2 shadow-md rounded-md p-4 transition-all duration-300 ease-in-out mb-4 cursor-pointer mt-4`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <NavLink to={`${nameLink}/${customer?.customer?.id}`}>
            <Button link>
              <h2 className="text-sm font-semibold">
                {customer?.customer?.name}
              </h2>
            </Button>
          </NavLink>
          <p className="text-gray-600 text-[10px]">
            {customer?.customer?.company}
          </p>
        </div>
        <p className="text-[10px] text-gray-600 font-semibold">
          Products: {customer.totalProducts}
        </p>
        <div className="absolute -right-2 -top-2">
          <div className="bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-[10px] font-semibold">
            {customer.statusCounts.length}
          </div>
        </div>
      </div>

      <Modal
        header={customer?.customer?.name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        bgColor="solidWhite"
      >
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-sm font-medium text-gray-800">Summary</h3>
            <p className="text-xs text-gray-600">
              Total Products: {customer.totalProducts}
            </p>
            <p className="text-xs text-gray-600">
              Total Value: ${customer.totalValue}
            </p>
          </div>
        </div>

        {isOpen && (
          <div className="mt-12">
            {customer.statusCounts.map((status, index) => (
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
                        width: `${(status.value / customer.totalValue) * 100}%`,
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

export default DashboardCustomerCard;

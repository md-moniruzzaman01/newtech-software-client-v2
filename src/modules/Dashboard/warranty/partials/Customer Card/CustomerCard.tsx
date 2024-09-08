/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ComponentLoading from "../../../../../common/components/Component Loading/ComponentLoading";
import DashboardCustomerCard from "../../../../../common/components/Dashboard Customer Card/DashboardCustomerCard";
import { useGetDashboardCustomerDataQuery } from "../../../../../redux/features/api/others";
import { authKey, emptyData } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import SortByDate from "../../../../../common/components/Sort By Date/SortByDate";

const CustomerCard = () => {
  const token = getFromLocalStorage(authKey);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const sortByDate = `startDate=${startDate}&endDate=${endDate}` || "";

  const { data: customerData, isLoading: customerLoading } =
    useGetDashboardCustomerDataQuery({ token, sortByDate });
  if (customerLoading) {
    return <ComponentLoading />;
  }

  return (
    <div>
      <div className="flex justify-between items-center pt-5 pb-2 px-3">
        <h2 className="text-lg font-semibold  ">Customer Details</h2>
        <SortByDate
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
        />
      </div>
      <hr className="border-grayForBorder border-2 mt-2 mr-5" />
      <div className="w-full h-[calc(100vh-280px)] overflow-y-auto overflow-x-hidden">
        {customerData?.data?.length > 0 ? (
          customerData?.data?.map((data: any, index: string) => (
            <DashboardCustomerCard key={index} customer={data} />
          ))
        ) : (
          <span className="flex justify-center items-center h-full">
            {emptyData}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomerCard;

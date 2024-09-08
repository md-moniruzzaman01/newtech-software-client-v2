/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ComponentLoading from "../../../../../common/components/Component Loading/ComponentLoading";
import DashboardEngineerCard from "../../../../../common/components/Dashboard Engineer Card/DashboardEngineerCard";
import { useGetDashboardEngineerDataQuery } from "../../../../../redux/features/api/others";
import { authKey, emptyData } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import SortByDate from "../../../../../common/components/Sort By Date/SortByDate";

const EngineerCard = () => {
  const token = getFromLocalStorage(authKey);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const sortByDate = `startDate=${startDate}&endDate=${endDate}` || "";

  const { data: engineerData, isLoading: engineerLoading } =
    useGetDashboardEngineerDataQuery({ token, sortByDate });
  console.log(engineerData);
  if (engineerLoading) {
    return <ComponentLoading />;
  }
  return (
    <div>
      <div className="flex justify-between items-center pt-5 pb-2 px-3">
        <h2 className="text-lg font-semibold  ">Engineer Details</h2>
        <SortByDate
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
        />
      </div>
      <hr className="border-grayForBorder border-2 mt-2 mr-5" />
      <div className="w-full h-[calc(100vh-360px)] overflow-y-auto overflow-x-hidden">
        {engineerData?.data?.length > 0 ? (
          engineerData?.data?.map((data: any, index: string) => (
            <DashboardEngineerCard
              key={index}
              engineer={data.engineer}
              statusCounts={data.statusCounts}
              totalWorked={data.totalWorked}
            />
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

export default EngineerCard;

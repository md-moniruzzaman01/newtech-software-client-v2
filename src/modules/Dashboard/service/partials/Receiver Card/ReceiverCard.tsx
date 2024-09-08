/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ComponentLoading from "../../../../../common/components/Component Loading/ComponentLoading";
import DashboardRecieverCard from "../../../../../common/components/Dashboard Reciever Card/DashboardRecieverCard";
import { useGetDashboardRecieverServiceQuery } from "../../../../../redux/features/api/others";
import { authKey, emptyData } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import SortByDate from "../../../../../common/components/Sort By Date/SortByDate";

const ReceiverCard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const sortByDate = `startDate=${startDate}&endDate=${endDate}` || "";

  const token = getFromLocalStorage(authKey);

  const { data: recieverData, isLoading: recieverLoading } =
    useGetDashboardRecieverServiceQuery({ token, sortByDate });

  if (recieverLoading) {
    return <ComponentLoading />;
  }

  return (
    <div>
      <div className="flex justify-between items-center pt-5 pb-2 px-3">
        <h2 className="text-lg font-semibold  ">Reciever Details</h2>
        <SortByDate
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
        />
      </div>
      <hr className="border-grayForBorder border-2 mt-2 mr-5" />
      <div className="w-full h-[calc(100vh-280px)] overflow-y-auto overflow-x-hidden">
        {recieverData?.data?.length > 0 ? (
          recieverData?.data?.map((data: any, index: string) => (
            <DashboardRecieverCard key={index} data={data} />
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

export default ReceiverCard;

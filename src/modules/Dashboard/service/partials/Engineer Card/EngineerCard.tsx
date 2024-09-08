/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ComponentLoading from "../../../../../common/components/Component Loading/ComponentLoading";
import DashboardEngineerCard from "../../../../../common/components/Dashboard Engineer Card/DashboardEngineerCard";
import Input from "../../../../../common/components/Input";
import { authKey, emptyData } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import Button from "../../../../../common/components/Button";
import { useGetDashboardEngineerServiceDataQuery } from "../../../../../redux/features/api/others";

const EngineerCard = () => {
  const [dateData, setDateData] = useState("");
  const token = getFromLocalStorage(authKey);

  const { data: engineerData, isLoading: engineerLoading } =
    useGetDashboardEngineerServiceDataQuery({
      token,
    });

  if (engineerLoading) {
    return <ComponentLoading />;
  }
  return (
    <div>
      <div className="flex justify-between items-center pt-5 pb-2 px-3">
        <h2 className="text-lg font-semibold  ">Engineer Details</h2>
        <Input
          onChange={(e) => setDateData(e.target.value)}
          className="max-h-7"
          inputType="date"
          IsDisabled={engineerData?.data?.length <= 0}
        />
        <Button disabled={!dateData} onClick={() => setDateData("")} small>
          All
        </Button>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ComponentLoading from "../../../../../common/components/Component Loading/ComponentLoading";
import DashboardCustomerCard from "../../../../../common/components/Dashboard Customer Card/DashboardCustomerCard";
import Input from "../../../../../common/components/Input";
import { useGetDashboardCustomerDataQuery } from "../../../../../redux/features/api/others";
import { authKey, emptyData } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import Button from "../../../../../common/components/Button";

const CustomerCard = () => {
  const [dateData, setDateData] = useState("");
  const token = getFromLocalStorage(authKey);

  const { data: customerData, isLoading: customerLoading } =
    useGetDashboardCustomerDataQuery({ token, startDate: dateData });
  if (customerLoading) {
    return <ComponentLoading />;
  }

  return (
    <div>
      <div className="flex justify-between items-center pt-5 pb-2 px-3">
        <h2 className="text-lg font-semibold  ">Customer Details</h2>
        <Input
          onChange={(e) => setDateData(e.target.value)}
          className="max-h-7"
          inputType="date"
        />
        <Button disabled={!dateData} onClick={() => setDateData("")} small>
          All
        </Button>
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

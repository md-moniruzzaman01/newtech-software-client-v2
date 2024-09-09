/* eslint-disable @typescript-eslint/no-explicit-any */
import ComponentLoading from "../../../../../common/components/Component Loading/ComponentLoading";
import DashboardQCCard from "../../../../../common/components/Dashboard QC Card/DashboardQCCard";
import ErrorShow from "../../../../../common/components/Error Show/ErrorShow";
import { useGetDashboardQCDataQuery } from "../../../../../redux/features/api/others";
import { authKey, emptyData } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";

const QCCard = () => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isError, error } = useGetDashboardQCDataQuery({
    token,
  });
  if (isLoading) {
    return <ComponentLoading />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div>
      <div className="flex justify-between items-center pt-5 pb-2 px-3">
        <h2 className="text-lg font-semibold  ">QA Details</h2>
      </div>
      <hr className="border-grayForBorder border-2 mt-2 mr-5" />
      <div className="w-full h-[calc(100vh-280px)] overflow-y-auto overflow-x-hidden">
        {data?.data?.length > 0 ? (
          data?.data?.map((data: any, index: string) => (
            <DashboardQCCard key={index} data={data} />
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

export default QCCard;

import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import {
  EngineerTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useGetEngineersQuery } from "../../../../redux/features/api/engineers";
import {
  useAssignEngineerMutation,
  useGetProductsForRepairQuery,
} from "../../../../redux/features/api/repair";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const EngineerAllRepairs = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [engineers, setEngineers] = useState([]);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const { data, isError, isLoading } = useGetProductsForRepairQuery({
    query,
    token,
  });
  const {
    data: engineerData,
    isError: engineerError,
    isLoading: engineerLoading,
    error
  } = useGetEngineersQuery({ token });
  const [
    assignEngineer,
    {
      isLoading: assignLoading,
      isError: assignError,
      isSuccess: assginSuccess,
    },
  ] = useAssignEngineerMutation();

  useEffect(() => {
    if (!engineerError && !engineerLoading) {
      setEngineers(engineerData?.data);
    }
  }, [engineerError, engineerLoading, engineerData]);

  function handleSubmit(id: string) {
    const fullData = {
      engineerId: id,
      repairIds: checkedRows,
    };
    assignEngineer({ fullData, token });
    console.log(assginSuccess);

  }

  if (isError || assignError) {
    return <ErrorShow error={error}/>
  }
  if (isLoading || assignLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="px-5">
      <Navbar name={"Engineer Items"} />
      <div className="py-5">
        <SearchBar
          dropdownPlaceHolder="Assign to Engineer"
          isDropdown
          dropdown={checkedRows?.length <= 0}
          filtersOptions={engineers}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="bg-solidWhite p-3 space-y-3">
        <StatusGroup />
        <div className=" rounded-t-md ">
          <CommonTable
            itemData={data?.data}
            headerData={EngineerTableHeader}
            dataLayout={tableLayout}
            checkedRows={checkedRows}
            setCheckedRows={setCheckedRows}
            checkbox
            productData
          />

          <div className="absolute bottom-2 right-[50px]">
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerAllRepairs;

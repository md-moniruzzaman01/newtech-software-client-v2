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
  useGetServiceProductsForRepairQuery,
} from "../../../../redux/features/api/repair";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";

const EngineerLibraryForService = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [engineers, setEngineers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);

  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);

  const { data, isError, isLoading, error } =
    useGetServiceProductsForRepairQuery({
      query,
      token,
    });
  const {
    data: engineerData,
    isError: engineerIsError,
    isLoading: engineerLoading,
    error: engineerError,
  } = useGetEngineersQuery({ token });
  const [assignEngineer, { isLoading: assignLoading }] =
    useAssignEngineerMutation();

  useEffect(() => {
    if (!engineerIsError && !engineerLoading) {
      setEngineers(engineerData?.data);
    }
  }, [engineerIsError, engineerLoading, engineerData]);

  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data]);

  const handleSubmit = async (id: string) => {
    const fullData = {
      engineerId: id,
      repairIds: checkedRows,
    };
    const result = await assignEngineer({ fullData, token });
    showSwal(result);
  };
  if (isError || engineerIsError) {
    <ErrorShow error={error || engineerError} />;
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

          <div className="fixed bottom-2  right-5">
            <Pagination
              limit={limit}
              currentPage={currentPage}
              totalItems={totalItems}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerLibraryForService;

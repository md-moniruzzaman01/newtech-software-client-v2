/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../../../shared/helpers/local_storage";
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
import SelectForOnchange from "../../../../common/components/SelectForOnchange/SelectForOnchange.tsx";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand.ts";

const EngineerLibraryForService = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [engineers, setEngineers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [asp, setAsp] = useState("");

  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);

  const { data, isError, isLoading, error } =
    useGetServiceProductsForRepairQuery({
      query,
      token,
    });

  const {
    data: brands,
    isLoading: brandsLoading,
    isError: brandsIsError,
    error: brandsError,
  } = useGetBrandsQuery({
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
    const storedAsp = getFromLocalStorage("engineerAspForService");
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
    if (storedAsp) {
      setAsp(storedAsp);
    }
  }, [data]);

  useEffect(() => {
    if (asp) {
      const engineersByAsp = engineerData?.data?.filter((item) =>
        item?.asp?.includes(asp)
      );
      setEngineers(engineersByAsp);
    } else if (!engineerError && !engineerLoading) {
      setEngineers(engineerData?.data);
    }
  }, [engineerError, engineerLoading, engineerData, asp]);

  const handleSubmit = async (id: string) => {
    const fullData = {
      engineerId: id,
      repairIds: checkedRows,
    };
    const result = await assignEngineer({ fullData, token });
    showSwal(result);
  };

  const handleAsp = (selectedAsp: any) => {
    if (selectedAsp?.target?.value) {
      setToLocalStorage("engineerAspForService", selectedAsp?.target?.value);
    } else {
      removeFromLocalStorage("engineerAspForService");
    }
    setAsp(selectedAsp?.target?.value);
  };

  if (isError || engineerIsError || brandsIsError) {
    <ErrorShow error={error || engineerError || brandsError} />;
  }

  if (isLoading || assignLoading || brandsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="px-5">
      <Navbar name={"Engineer Items"} />
      <div className="py-5 relative">
        <div className=" absolute right-60 w-2/12">
          <SelectForOnchange
            placeholder="Filter By ASP"
            valueAll
            value={asp}
            Filter={brands?.data}
            onChange={handleAsp}
          />
        </div>
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

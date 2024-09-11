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
  useGetProductsForRepairQuery,
} from "../../../../redux/features/api/repair";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand.ts";
import SelectForOnchange from "../../../../common/components/SelectForOnchange/SelectForOnchange.tsx";

const EngineerItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [engineers, setEngineers] = useState([]);
  const [asp, setAsp] = useState("");
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const {
    data: brands,
    isLoading: brandsLoading,
    isError: brandsIsError,
    error: brandsError,
  } = useGetBrandsQuery({
    token,
  });

  const {
    data,
    isError,
    isLoading,
    error: productRepairError,
  } = useGetProductsForRepairQuery({
    query,
    token,
  });

  const {
    data: engineerData,
    isError: engineerError,
    isLoading: engineerLoading,
    error,
  } = useGetEngineersQuery({ token });

  useEffect(() => {
    const storedAsp = getFromLocalStorage("engineerAspForWarranty");
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
    if (storedAsp) {
      setAsp(storedAsp);
    }
  }, [data]);

  const [
    assignEngineer,
    { isLoading: assignLoading, isError: assignIsError, error: assignError },
  ] = useAssignEngineerMutation();

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
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      setCheckedRows([]);
    }
  };

  const handleAsp = (selectedAsp: any) => {
    if (selectedAsp?.target?.value) {
      setToLocalStorage("engineerAspForWarranty", selectedAsp?.target?.value);
    } else {
      removeFromLocalStorage("engineerAspForWarranty");
    }
    setAsp(selectedAsp?.target?.value);
  };

  if (isError || assignIsError || engineerError || brandsIsError) {
    return (
      <ErrorShow
        error={error || productRepairError || assignError || brandsError}
      />
    );
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
            valueAll
            placeholder="Engineer Filter By ASP"
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
            productData
            setCheckedRows={setCheckedRows}
            checkbox
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

export default EngineerItems;

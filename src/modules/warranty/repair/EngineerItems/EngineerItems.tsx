import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import { EngineerTableHeader, fields, keys } from "./config/constants";
import EngineerTable from "./partials/EngineerTable/EngineerTable";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useGetEngineersQuery } from "../../../../redux/features/api/engineers";
import {
  useAssignEngineerMutation,
  useGetProductsForRepairQuery,
} from "../../../../redux/features/api/repair";

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
  } = useGetEngineersQuery({ token });
  const [
    assignEngineer,
    {
      isLoading: assignLoading,
      isError: assignError,
      isSuccess: assginSuccess,
    },
  ] = useAssignEngineerMutation();

  const handleSubmit = (id: string, name) => {
    console.log(id, name);
    // if (selectEngineer?.id) {
    //   createQC({ fullData, token });
    //   setSelectEngineer(engineerSelectData);
    // }
  };

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
    //     const url = `http://localhost:5000/api/v2/repair/multiple`;

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: `${token}`,
    //   },
    //   body: JSON.stringify(fullData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }

  const handleCheckboxChange = (index: string) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };

  const handleAllCheckboxChange = () => {
    if (checkedRows.length === engineerData?.length) {
      setCheckedRows([]);
    } else {
      const allIds =
        engineerData?.data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((item: any) => item?._id)
          .filter((id: string) => id !== undefined) || [];
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };

  if (isError || assignError) {
    return <div>error</div>;
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
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="bg-solidWhite p-3 space-y-3">
        <StatusGroup />
        <div className=" rounded-t-md ">
          <EngineerTable
            HeaderData={EngineerTableHeader}
            itemData={data?.data}
            checkedRows={checkedRows}
            handleCheckboxChange={handleCheckboxChange}
            handleAllCheckboxChange={handleAllCheckboxChange}
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

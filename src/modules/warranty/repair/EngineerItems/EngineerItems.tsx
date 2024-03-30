import {  useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import { EngineerTableHeader, fields, keys } from "./config/constants";
import EngineerTable from "./partials/EngineerTable/EngineerTable";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { EngineerTableBodyProps } from "./config/types";

import { useGetProductsQuery } from "../../../../redux/features/api/qc";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";

const EngineerItems = () => {

  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [engineerData, setEngineerData] = useState<
    EngineerTableBodyProps[] | []
  >([]);
  const [engineers, setEngineers] = useState([]);
  const [searchParams] = useSearchParams();
  // const query = constructQuery(searchParams, fields, keys)
  const token = getFromLocalStorage(authKey);
  const {
    data,
    isError:dataError,
    isLoading:dataLoading,
  } = useGetProductsQuery({
    // query,
    token,
  });

console.log(data)


  function handleSubmit(id:string,user:string) {
    const fullData = {
      qc_checker_id: id,
      user_name: user,
      repairIds: checkedRows,
    };
    console.log(fullData)
    // createQC({ fullData, token })
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
        engineerData
          ?.map((item) => item?._id)
          .filter((id) => id !== undefined) || [];
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };

  console.log(data)
  if (dataLoading ) {
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
          <EngineerTable
            HeaderData={EngineerTableHeader}
            itemData={data?.data}
            Link="/engineer-items/order-details"
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

export default EngineerItems;

import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import { EngineerTableHeader } from "./config/constants";
import EngineerTable from "./partials/EngineerTable/EngineerTable";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { EngineerTableBodyProps } from "./config/types";
import { useGetEngineersQuery } from "../../../../redux/features/api/engineers";

const EngineerItems = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [engineerData, setEngineerData] = useState<
    EngineerTableBodyProps[] | []
  >([]);
  const [engineers, setEngineers] = useState([]);
  const [selectEngineer, setSelectEngineer] = useState(null);
  const assign_data = { qc_checker_id: selectEngineer, id: checkedRows };
  const token = getFromLocalStorage(authKey);
  console.log(assign_data);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });
  const {
    data: engineersData,
    isError: engineerError,
    isLoading: engineerLoading,
  } = useGetEngineersQuery({ token });
  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setEngineerData(complaintsData?.data);
    }
    if (!engineerError && !engineerLoading) {
      setEngineers(engineersData?.data);
    }
  }, [
    complaintsData,
    complaintsLoading,
    complaintsError,
    engineerError,
    engineerLoading,
    engineersData,
  ]);

  const handleCheckboxChange = (index: string) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };

  const handleAllCheckboxChange = () => {
    if (checkedRows.length === engineerData?.length) {
      // If all checkboxes are already checked, uncheck them all
      setCheckedRows([]);
    } else {
      // If not all checkboxes are checked, set checkedRows to contain all _id values
      const allIds =
        engineerData
          ?.map((item) => item?._id)
          .filter((id) => id !== undefined) || []; // Filter out undefined values
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };

  if (complaintsLoading) {
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
          setSelectEngineer={setSelectEngineer}
        />
      </div>
      <div className="bg-solidWhite p-3 space-y-3">
        <StatusGroup />
        <div className=" rounded-t-md ">
          <EngineerTable
            HeaderData={EngineerTableHeader}
            itemData={engineerData}
            Link="/qc/order-details"
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

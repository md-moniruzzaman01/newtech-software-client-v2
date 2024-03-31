import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import QATable from "./partials/QATable/QATable";
import { QATableHeader, fields, keys } from "./config/constants";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { QATableBodyProps } from "./config/types";
import { useGetEngineersQuery } from "../../../../redux/features/api/engineers";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";
import { useCreateQAMutation, useGetQAProductsQuery,  } from "../../../../redux/features/api/qa";
import swal from "sweetalert";

const QAItems = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [qaData, setQAData] = useState<QATableBodyProps[] | []>([]);
  const [engineers, setEngineers] = useState([]);
  // const [selectEngineer, setSelectEngineer] =
  //   useState<qaDateProps>(qaSelectData);

    const [searchParams] = useSearchParams();
    const query = constructQuery(searchParams, fields, keys)
    const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetQAProductsQuery({
    query,
    token
  });
  const {
    data: engineerData,
    isError: engineerError,
    isLoading: engineerLoading,
  } = useGetEngineersQuery({ token });
  const [createQA,{isLoading,isError,isSuccess}] = useCreateQAMutation();


  function handleSubmit(id:string) {
    const fullData = {
      qa_checker_id: id,
      repairIds: checkedRows,
    };
    createQA({ fullData, token })
  }

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setQAData(complaintsData?.data);
    }
    if (!engineerError && !engineerLoading) {
      setEngineers(engineerData?.data);
    }
  }, [
    complaintsData,
    complaintsLoading,
    complaintsError,
    engineerError,
    engineerLoading,
    engineerData,
  ]);

  const handleCheckboxChange = (index: string) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };
  const handleAllCheckboxChange = () => {
    if (checkedRows.length === qaData?.length) {
      // If all checkboxes are already checked, uncheck them all
      setCheckedRows([]);
    } else {
      const allIds =
      qaData?.map((item) => item?._id).filter((id) => id !== undefined) || [];
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };
  if (complaintsLoading || isLoading) {
    return <LoadingPage />;
  }
  if (isSuccess) {
    swal("Your data has been updated successfully.", {
      icon: "success",
    });
  }
  if (isError) {
    swal("Error!", "something is wrong", "error");
  }
  console.log(complaintsData)
  return (
    <div className="px-5">
      <Navbar name={"QA Items"} />
      <div className="py-5">
        <SearchBar
          dropdownPlaceHolder="Assign to QA"
          isDropdown
          dropdown={checkedRows?.length <= 0}
          filtersOptions={engineers}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="bg-solidWhite p-3 space-y-3">
        <StatusGroup />
        <div className=" rounded-t-md ">
          <QATable
            HeaderData={QATableHeader}
            itemData={qaData}
            Link="/qa-items/order-details"
            checkedRows={checkedRows}
            handleCheckboxChange={handleCheckboxChange}
            handleAllCheckboxChange={handleAllCheckboxChange}
          />

          <div className="absolute bottom-2 right-[50px]">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAItems;

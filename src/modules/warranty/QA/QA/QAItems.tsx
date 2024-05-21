import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import { QATableHeader, fields, keys, tableLayout } from "./config/constants";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { QATableBodyProps } from "./config/types";
import { useGetEngineersQuery } from "../../../../redux/features/api/engineers";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";
import {
  useCreateQAMutation,
  useGetQAProductsQuery,
} from "../../../../redux/features/api/qa";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const QAItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [qaData, setQAData] = useState<QATableBodyProps[] | []>([]);
  const [engineers, setEngineers] = useState([]);
  // const [selectEngineer, setSelectEngineer] =
  //   useState<qaDateProps>(qaSelectData);

  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsIsError,
    isLoading: complaintsLoading,
    error: complaintsError,
  } = useGetQAProductsQuery({
    query,
    token,
  });
  const {
    data: engineerData,
    isError: engineerIsError,
    isLoading: engineerLoading,
    error: engineerError,
  } = useGetEngineersQuery({ token });
  const [createQA, { isLoading }] = useCreateQAMutation();

  const handleSubmit = async (id: string) => {
    const fullData = {
      qa_checker_id: id,
      repairIds: checkedRows,
    };
    const result = await createQA({ fullData, token });
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      setCheckedRows([]);
    }
  };

  useEffect(() => {
    if (!complaintsLoading && !complaintsIsError) {
      setQAData(complaintsData?.data);
      setTotalItems(complaintsData.meta.total);
      setLimit(complaintsData.meta.limit);
      setCurrentPage(complaintsData?.meta?.page);
    }
    if (!engineerIsError && !engineerLoading) {
      setEngineers(engineerData?.data);
    }
  }, [
    complaintsData,
    complaintsLoading,
    complaintsIsError,
    engineerIsError,
    engineerLoading,
    engineerData,
  ]);
  if (complaintsLoading || isLoading) {
    return <LoadingPage />;
  }

  if (complaintsIsError || engineerIsError) {
    return <ErrorShow error={complaintsError || engineerError} />;
  }

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
          <CommonTable
            itemData={qaData}
            headerData={QATableHeader}
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

export default QAItems;

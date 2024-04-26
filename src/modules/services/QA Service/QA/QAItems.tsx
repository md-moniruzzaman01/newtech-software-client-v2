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
  useGetQAProductsForServiceQuery,
} from "../../../../redux/features/api/qa";
import swal from "sweetalert";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const QAItemsService = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [qaData, setQAData] = useState<QATableBodyProps[] | []>([]);
  const [engineers, setEngineers] = useState([]);

  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetQAProductsForServiceQuery({
    query,
    token,
  });
  const {
    data: engineerData,
    isError: engineerError,
    isLoading: engineerLoading,
  } = useGetEngineersQuery({ token });
  const [createQA, { isLoading, isError, isSuccess, error }] =
    useCreateQAMutation();

  function handleSubmit(id: string) {
    const fullData = {
      qa_checker_id: id,
      repairIds: checkedRows,
    };
    createQA({ fullData, token });
  }

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setQAData(complaintsData?.data);
      setTotalItems(complaintsData.meta.total);
      setLimit(complaintsData.meta.limit);
      setCurrentPage(complaintsData?.meta?.page);
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
  if (complaintsLoading || isLoading) {
    return <LoadingPage />;
  }
  if (isSuccess) {
    swal("Your data has been updated successfully.", {
      icon: "success",
    });
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className="px-5">
      <Navbar name={"Service QA Items"} />
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
            // link="/service/qa-items/order-details"
            itemData={qaData}
            headerData={QATableHeader}
            dataLayout={tableLayout}
            checkedRows={checkedRows}
            setCheckedRows={setCheckedRows}
            productData
            checkbox
          />
          <div className="absolute bottom-2 right-[50px]">
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

export default QAItemsService;

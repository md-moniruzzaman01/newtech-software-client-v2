import { useEffect, useState } from "react";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { QCTableHeader, fields, keys, tableLayout } from "./config/constants";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import StatusGroup from "../../../../common/components/Status Group";
import { QATableBodyProps } from "../../QA/QA/config/types";
import { useGetEngineersQuery } from "../../../../redux/features/api/engineers";
import {
  useCreateQCMutation,
  useGetProductsQuery,
} from "../../../../redux/features/api/qc";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import swal from "sweetalert";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const Qc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [qcData, setQCData] = useState<QATableBodyProps[] | []>([]);
  const [engineers, setEngineers] = useState([]);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetProductsQuery({
    query,
    token,
  });
  const {
    data: engineerData,
    isError: engineerError,
    isLoading: engineerLoading,
  } = useGetEngineersQuery({ token });
  const [createQC, { isLoading, isError, isSuccess, error }] = useCreateQCMutation();

  function handleSubmit(id: string, user: string) {
    const fullData = {
      qc_checker_id: id,
      user_name: user,
      repairIds: checkedRows,
    };
    console.log(fullData)
    createQC({ fullData, token });
  }

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setQCData(complaintsData?.data);
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
    return <ErrorShow error={error} />
  }
  console.log(checkedRows)
  return (
    <div className="px-5">
      <Navbar name={"QC"}></Navbar>
      <div className="py-5">
        <SearchBar
          linkBtn="+ Delivered to Desk"
          isDropdown
          dropdown={checkedRows?.length <= 0}
          filtersOptions={engineers}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="bg-solidWhite p-3 space-y-3">
        <StatusGroup />
        <div className="rounded-t-md ">
          <CommonTable
            itemData={qcData}
            headerData={QCTableHeader}
            dataLayout={tableLayout}
            checkedRows={checkedRows}
            setCheckedRows={setCheckedRows}
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

export default Qc;

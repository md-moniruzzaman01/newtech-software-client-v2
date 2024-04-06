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

const Qc = () => {
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
  const [createQC, { isLoading, isError, isSuccess }] = useCreateQCMutation();

  function handleSubmit(id: string, user: string) {
    const fullData = {
      qc_checker_id: id,
      user_name: user,
      repairIds: checkedRows,
    };
    createQC({ fullData, token });
  }

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setQCData(complaintsData?.data);
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
    swal("Error!", "something is wrong", "error");
  }
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
            link="/qc/order-details"
          />

          <div className="absolute bottom-2 right-[50px]">
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qc;

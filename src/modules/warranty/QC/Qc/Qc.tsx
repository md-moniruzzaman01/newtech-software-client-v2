import { useEffect, useState } from "react";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import QCTable from "./partials/QCTable/QCTable";
import { QCTableHeader, qcSelectData } from "./config/constants";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import StatusGroup from "../../../../common/components/Status Group";
import { QATableBodyProps } from "../../QA/QA/config/types";
import { useGetEngineersQuery } from "../../../../redux/features/api/engineers";
import { useCreateQCMutation } from "../../../../redux/features/api/qc";
import { EngineerDateProps } from "./config/types";

const Qc = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [qcData, setQCData] = useState<QATableBodyProps[] | []>([]);
  const [engineers, setEngineers] = useState([]);
  const [selectEngineer, setSelectEngineer] =
    useState<EngineerDateProps>(qcSelectData);
  const fullData = {
    qc_checker_id: selectEngineer?.id,
    user_name: selectEngineer?.user,
    repairIds: checkedRows,
  };
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });
  const {
    data: engineerData,
    isError: engineerError,
    isLoading: engineerLoading,
  } = useGetEngineersQuery({ token });
  const [createQC] = useCreateQCMutation();
  console.log(selectEngineer);

  if (selectEngineer?.id) {
    createQC({ fullData, token });
    setSelectEngineer(qcSelectData);
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

  const handleCheckboxChange = (index: string) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };
  const handleAllCheckboxChange = () => {
    if (checkedRows.length === qcData?.length) {
      // If all checkboxes are already checked, uncheck them all
      setCheckedRows([]);
    } else {
      // If not all checkboxes are checked, set checkedRows to contain all _id values
      const allIds =
        qcData?.map((item) => item?._id).filter((id) => id !== undefined) || []; // Filter out undefined values
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
      <Navbar name={"QC"}></Navbar>
      <div className="py-5">
        <SearchBar
          linkBtn="+ Delivered to Desk"
          isDropdown
          dropdown={checkedRows?.length <= 0}
          filtersOptions={engineers}
          setSelectEngineer={setSelectEngineer}
        />
      </div>
      <div className="bg-solidWhite p-3 space-y-3">
        <StatusGroup />
        <div className="rounded-t-md ">
          <QCTable
            HeaderData={QCTableHeader}
            itemData={qcData}
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

export default Qc;

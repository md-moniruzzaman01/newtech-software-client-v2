import { useEffect, useState } from "react";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import QCTable from "./partials/QCTable/QCTable";
import { QCTableHeader } from "./config/constants";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import StatusGroup from "../../../../common/components/Status Group";

const Qc = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
  const [qcData, setQCData] = useState([]);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });
  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setQCData(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);

  const handleCheckboxChange = (index: number) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };
  const handleAllCheckboxChange = () => {
    const allIndexes = Array.from({ length: qcData?.length }, (_, i) => i);
    if (checkedRows.length === qcData?.length) {
      setCheckedRows([]);
    } else {
      setCheckedRows(allIndexes);
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

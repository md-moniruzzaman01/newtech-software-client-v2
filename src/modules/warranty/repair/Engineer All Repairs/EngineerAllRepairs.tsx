
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { useGetAllRepairsQuery } from "../../../../redux/features/api/repair";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { MyQCTableHeader } from "../../QC/QCMyLibrary/config/constants";
import MyQcTable from "../../QC/QCMyLibrary/partials/MyQcTable";
import { useEffect, useState } from "react";

const EngineerAllRepairs = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const token = getFromLocalStorage(authKey);
  const id = "65f7d1b8ff0aba99b376d459";
  const { data, isError, isLoading } = useGetAllRepairsQuery({
    id,
    token,
  });
  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    console.error(isError);

    return <div>Error</div>;
  }

  const handleCheckboxChange = (repair_id: string, qc_id: string) => {
    if (
      checkedRows.some(
        (row) => row.repair_id === repair_id && row.qc_id === qc_id
      )
    ) {
      setCheckedRows(checkedRows.filter((item) => item?.qc_id !== qc_id));
    } else {
      setCheckedRows([...checkedRows, { qc_id, repair_id }]);
    }
  };
  const handleAllCheckboxChange = () => {
    if (checkedRows.length === data?.data?.length) {
      setCheckedRows([]);
    } else {
      const allIds =
        data?.data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((item: any) => ({
            qc_id: item?.id || "", 
            repair_id: item?.repair?.id || "",
          }))
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((obj: any) => obj.qc_id !== "" && obj.repair_id !== "") || [];
      if (allIds.length > 0) {
        setCheckedRows(allIds);
      }
    }
  };

  const handleDeleteData = () => {
    console.log(checkedRows);
  };
  const handleReturnData = () => {
    console.log(checkedRows);
  };
  console.log("all repaired",data)
  return (
    <div className=" px-5">
      <Navbar name="QC My Library"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <div>
            <StatusGroup
              isSelected={checkedRows?.length <= 0}
              handleReturnData={handleReturnData}
              handleDeleteData={handleDeleteData}
              isButton
              dltBtnValue="Delete"
              returnBtnValue="Return to the QC Library"
            />
          </div>
          <div className="pt-5">
            <MyQcTable
              Link="/engineer-items/order-details"
              itemData={data?.data}
              HeaderData={MyQCTableHeader}
              checkedRows={checkedRows}
              handleCheckboxChange={handleCheckboxChange}
              handleAllCheckboxChange={handleAllCheckboxChange}
            ></MyQcTable>
          </div>
        </div>
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
  );
};

export default EngineerAllRepairs;

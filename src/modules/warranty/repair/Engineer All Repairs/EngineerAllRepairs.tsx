import CommonTable from "../../../../common/components/Common Table/CommonTable";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { useGetAllRepairsQuery } from "../../../../redux/features/api/repair";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useEffect, useState } from "react";
import { MyQCTableHeader, tableLayout } from "./config/constants";
import { getUserInfo } from "../../../../services/auth.service";

const EngineerAllRepairs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();
  const { data, isError, isLoading } = useGetAllRepairsQuery({
    id: user._id,
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

  const handleDeleteData = () => {
    console.log(checkedRows);
  };
  const handleReturnData = () => {
    console.log(checkedRows);
  };

  return (
    <div className=" px-5">
      <Navbar name="All Repairs" />
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
              dltBtnValue="Delete"
              returnBtnValue="Return to the QC Library"
            />
          </div>
          <div className="pt-5">
            <CommonTable
              itemData={data?.data}
              headerData={MyQCTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
              link="/engineer-items/order-details"
            />
          </div>
        </div>
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
  );
};

export default EngineerAllRepairs;

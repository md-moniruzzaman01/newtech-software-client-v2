import { useSearchParams } from "react-router-dom";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { useGetRepairsQuery } from "../../../../redux/features/api/repair";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

import { useEffect, useState } from "react";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import {
  MyEngineerLibraryHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import CommonTable from "../../../../common/components/Common Table/CommonTable";

const MyLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const id = "65f7d1b8ff0aba99b376d459";
  const { data, isError, isLoading } = useGetRepairsQuery({
    id,
    query,
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
      <Navbar name="My Library  (Engineer)"></Navbar>
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
              returnBtnValue="Return to the Engineer Library"
            />
          </div>
          <div className="pt-5">
            <CommonTable
              link="/engineer-items/order-details"
              itemData={data?.data}
              headerData={MyEngineerLibraryHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
            />
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

export default MyLibrary;

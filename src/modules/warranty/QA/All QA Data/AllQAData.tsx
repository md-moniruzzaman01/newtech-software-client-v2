import { useEffect, useState } from "react";
import { useGetAllQAQuery } from "../../../../redux/features/api/qa";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { fields, keys, QATableHeader, tableLayout } from "./config/constants";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";

const AllQAData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const token = getFromLocalStorage(authKey);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const { data: qaData, isLoading } = useGetAllQAQuery({ token, query });

  useEffect(() => {
    if (qaData) {
      setTotalItems(qaData.meta.total);
      setLimit(qaData.meta.limit);
      setCurrentPage(qaData?.meta?.page);
    }
  }, [qaData]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" px-5">
      <Navbar name="QA All"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <CommonTable
              itemData={qaData?.data}
              headerData={QATableHeader}
              dataLayout={tableLayout}
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

export default AllQAData;

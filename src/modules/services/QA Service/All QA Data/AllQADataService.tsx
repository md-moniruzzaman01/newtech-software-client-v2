import { useEffect, useState } from "react";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetAllQAServiceQuery } from "../../../../redux/features/api/qa";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { fields, keys, QATableHeader, tableLayout } from "./config/constants";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const AllQADataService = () => {
  const token = getFromLocalStorage(authKey);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  const { data, isLoading, isError, error } = useGetAllQAServiceQuery({
    token,
    query,
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
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Service QA All" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <CommonTable
              itemData={data?.data}
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

export default AllQADataService;

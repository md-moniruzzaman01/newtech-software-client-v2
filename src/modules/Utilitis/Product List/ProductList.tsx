import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import { QATableHeader, fields, keys, tableLayout } from "./config/constants";
import { authKey } from "../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { useGetProductsAllQuery } from "../../../redux/features/api/others";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../common/components/Status Group";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";

const ProductList = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  const token = getFromLocalStorage(authKey);
  const { data, isError, isLoading } = useGetProductsAllQuery({
    token,
    query,
  });
  console.log(data);
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

  return (
    <div className=" px-5">
      <Navbar name="Product" />
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
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
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

export default ProductList;

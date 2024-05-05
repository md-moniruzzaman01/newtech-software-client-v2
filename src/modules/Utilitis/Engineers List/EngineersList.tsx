import { NavLink } from "react-router-dom";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Button from "../../../common/components/Button";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { useGetEngineersQuery } from "../../../redux/features/api/engineers";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { headerForEngineersTable, tableLayout } from "./config/constant";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";
import { useEffect, useState } from "react";

const EngineersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const token = getFromLocalStorage(authKey);
  const {
    data: engineers,
    isLoading,
    isError,
    error,
  } = useGetEngineersQuery({ token });
  useEffect(() => {
    if (engineers) {
      setTotalItems(engineers.meta.total);
      setLimit(engineers.meta.limit);
      setCurrentPage(engineers?.meta?.page);
    }
  }, [engineers]);
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className="px-5 relative">
      <Navbar name="Engineers List" />

      <div className="flex gap-2 justify-end py-5">
        <NavLink to="/add-engineer">
          <Button mini primary>
            + Add Engineer
          </Button>
        </NavLink>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div>
          <CommonTable
            dataLayout={tableLayout}
            headerData={headerForEngineersTable}
            itemData={engineers?.data}
          />
        </div>
      </div>

      <div className="fixed bottom-5 right-5">
        <Pagination
          limit={limit}
          currentPage={currentPage}
          totalItems={totalItems}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default EngineersList;

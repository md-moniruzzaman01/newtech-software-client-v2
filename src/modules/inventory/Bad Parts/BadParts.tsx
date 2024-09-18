import { NavLink, useSearchParams } from "react-router-dom";
import { authKey } from "../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { useEffect, useState } from "react";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import { fields, keys } from "./config/constants";
import { useGetBadPartsQuery } from "../../../redux/features/api/inventory";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../common/components/Status Group";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import DndTable from "./partials/Dnd Table/DndTable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Item } from "./config/type";
import Button from "../../../common/components/Button";

const BadParts = () => {
  const [checkedRows, setCheckedRows] = useState<Item[]>([]);
  const [searchParams] = useSearchParams();
  const token = getFromLocalStorage(authKey);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [totalItems, setTotalItems] = useState(0);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  const {
    data: badPartsData,
    isLoading,
    isError,
    error,
  } = useGetBadPartsQuery({ token, query });

  useEffect(() => {
    if (!isError && !isLoading) {
      setTotalItems(badPartsData?.meta?.total);
      setLimit(badPartsData?.meta.limit);
      setCurrentPage(badPartsData?.meta?.page);
    }
  }, [isLoading, badPartsData, isError]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Bad Parts" />
      <div className="pt-5">
        <SearchBar>
          <NavLink to={"/bad-parts/submission"}>
            <Button disabled={!checkedRows?.length} primary>
              Submit
            </Button>
          </NavLink>
        </SearchBar>
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <DndProvider backend={HTML5Backend}>
            <div className="pt-5 pb-20">
              <DndTable
                checkedRows={checkedRows}
                setCheckedRows={setCheckedRows}
                data={badPartsData?.data}
              />
            </div>
          </DndProvider>
        </div>
        <div className="fixed bottom-2  right-5">
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            limit={limit}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BadParts;

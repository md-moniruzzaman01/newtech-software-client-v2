import { useSearchParams } from "react-router-dom";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { useGetLeakMaterialQuery } from "../../../../redux/features/api/complaints";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import {
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constant";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useEffect, useState } from "react";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import CommonTable from "../../../../common/components/Common Table/CommonTable";

const LeakMaterial = () => {
  const token = getFromLocalStorage(authKey);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);

  const params = new URLSearchParams(window.location.search);
  const status = params.get("repair_status");
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  // redux
  const {
    data: LeakMaterial,
    isLoading,
    isError,
    error,
  } = useGetLeakMaterialQuery({ token, query });

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalItems(LeakMaterial.meta.total);
      setLimit(LeakMaterial.meta.limit);
      setCurrentPage(LeakMaterial?.meta?.page);
    }
  }, [isLoading, isError, LeakMaterial]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Leak Material"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup
            isSelected={checkedRows?.length <= 0}
            returnBtnValue="Return To Engineer"
            returnCNBtnValue="CN"
            isDisabledCNBtn={status === "CN"}
          />
          <div className="pt-5">
            <CommonTable
              itemData={LeakMaterial?.data}
              headerData={complaintsTableHeader}
              dataLayout={tableLayout}
              checkbox
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              productData
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

export default LeakMaterial;

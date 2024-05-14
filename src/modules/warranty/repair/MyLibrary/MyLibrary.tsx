import { useSearchParams } from "react-router-dom";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import {
  useGetRepairsQuery,
  useRepairWarrantyReturnToLibraryMutation,
} from "../../../../redux/features/api/repair";
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
import { getUserInfo } from "../../../../services/auth.service";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const MyLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();
  const [repairWarrantyReturnToLibrary, { isLoading: returnLoading }] =
    useRepairWarrantyReturnToLibraryMutation();
  const { data, isError, isLoading, error } = useGetRepairsQuery({
    id: user._id,
    query,
    token,
  });
  const fullData = { repairIds: checkedRows };

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

  const handleReturnData = async () => {
    const result = await repairWarrantyReturnToLibrary({ token, fullData });
    console.log(result);
    showSwal(result);
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
              isReturnLoading={returnLoading}
              handleReturnData={handleReturnData}
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

export default MyLibrary;

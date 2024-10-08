import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import {
  fields,
  keys,
  MyEngineerLibraryHeader,
  tableLayout,
} from "./config/constants";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { getUserInfo } from "../../../../services/auth.service";
import {
  useGetRepairsQuery,
  useRepairWarrantyReturnToLibraryMutation,
} from "../../../../redux/features/api/repair";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

const RequestedItemService = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
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

    showSwal(result);
  };

  return (
    <div className=" px-5">
      <Navbar name="Working (Beta)" />
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

export default RequestedItemService;

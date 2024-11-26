import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

import { useEffect, useState } from "react";
import { getUserInfo } from "../../../../services/auth.service";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import {
  fields,
  keys,
  MyRepairTableHeader,
  tableLayout,
} from "./config/constants";
import { useGetOldRepairsForServiceQuery } from "../../../../redux/features/api/repair";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";

const MyRepairs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [checkedRows, setCheckedRows] = useState<
    { repair_id: string; qc_id: string }[]
  >([]);
  const token = getFromLocalStorage(authKey);
  const [searchParams] = useSearchParams();

  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  const user = getUserInfo();
  const { data, isError, isLoading, error, isFetching } =
    useGetOldRepairsForServiceQuery({
      id: user._id,
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

  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="My Repaired" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <div>
            <StatusGroup />
          </div>
          <div className="pt-5">
            <CommonTable
              dataLayout={tableLayout}
              headerData={MyRepairTableHeader}
              itemData={data?.data}
              checkbox
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              loading={isLoading || isFetching}
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

export default MyRepairs;

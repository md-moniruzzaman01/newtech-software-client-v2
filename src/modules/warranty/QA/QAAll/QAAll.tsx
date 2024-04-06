import { useState } from "react";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

import { useGetQcsQuery } from "../../../../redux/features/api/qc";
import { QATableHeader, tableLayout } from "./config/constants";
import CommonTable from "../../../../common/components/Common Table/CommonTable";

const QCMyItems = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const token = getFromLocalStorage(authKey);
  const id = "65f7d1b8ff0aba99b376d459";
  const { data, isError, isLoading } = useGetQcsQuery({
    id,
    token,
  });
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    console.error(isError);

    return <div>Error</div>;
  }

  console.log(data);
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
              itemData={data?.data}
              headerData={QATableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
              link="/qc/order-details"
            />
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default QCMyItems;

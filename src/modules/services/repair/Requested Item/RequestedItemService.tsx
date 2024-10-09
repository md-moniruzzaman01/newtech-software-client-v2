/* eslint-disable @typescript-eslint/no-explicit-any */
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

import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { WarningSwal } from "../../../../shared/helpers/warningSwal";
import { useUpdateRepairStatusMutation } from "../../../../redux/features/api/engineers";
import { useGetRepairsForRequestedForServiceQuery } from "../../../../redux/features/api/repair";

const RequestedItemService = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);

  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();

  const [updateRepairStatus, { isLoading: updateRepairIsLoading }] =
    useUpdateRepairStatusMutation();

  const { data, isError, isLoading, error } =
    useGetRepairsForRequestedForServiceQuery({
      id: user._id,
      query,
      token,
    });

  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data]);

  const handleSubmit = async (id) => {
    const fullData = {
      status: "Repaired",
      note: "",
    };

    const result: any = await updateRepairStatus({ id, fullData, token });
    showSwal(result);
  };

  if (isLoading || updateRepairIsLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Working (Beta)" />
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
              link="/service-engineer-items/order-details"
              itemData={data?.data}
              headerData={MyEngineerLibraryHeader}
              dataLayout={tableLayout}
              functionBtn={(id: string) =>
                WarningSwal(
                  handleSubmit,
                  id,
                  "You want to delivered this data!"
                )
              }
              functionBtnValue="Delivery"
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

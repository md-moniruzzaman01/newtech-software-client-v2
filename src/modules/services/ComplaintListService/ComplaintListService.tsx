/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { TableBodyProps } from "./config/types";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import {
  btnValue,
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../common/components/Status Group";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import {
  useDeleteComplaintsMutation,
  useGetServicesQuery,
} from "../../../redux/features/api/service";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { showSwal } from "../../../shared/helpers/SwalShower.ts";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";

//internal

const ComplaintListService = () => {
  const [isActiveBtn, setIsActiveBtn] = useState("");
  const [complaints, setComplaints] = useState<TableBodyProps[] | []>([]);
  const [activeRoute, setActiveRoute] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsIsError,
    isLoading: complaintsLoading,
    error: complaintsError,
  } = useGetServicesQuery({
    query,
    token,
  });
  const [deleteComplaints, { isLoading }] = useDeleteComplaintsMutation();
  useEffect(() => {
    if (complaintsData) {
      setTotalItems(complaintsData.meta.total);
      setLimit(complaintsData.meta.limit);
      setCurrentPage(complaintsData?.meta?.page);
    }
  }, [complaintsData]);
  useEffect(() => {
    if (searchParams?.get("repair_status")) {
      setIsActiveBtn(searchParams?.get("repair_status"));
    } else {
      setIsActiveBtn("");
    }
  }, [searchParams]);

  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
    if (!complaintsLoading && !complaintsIsError) {
      setComplaints(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsIsError]);

  const handleDelete = () => {
    const fullData = {
      repairIds: checkedRows,
    };
    const result = deleteComplaints({ token, fullData });
    showSwal(result);
  };
  const handleReturn = () => {
    console.log(checkedRows);
  };
  const handleCancel = () => {
    console.log(checkedRows);
  };

  if (complaintsLoading || isLoading) {
    return <LoadingPage />;
  }

  if (complaintsIsError) {
    return <ErrorShow error={complaintsError} />;
  }
  return (
    <div className=" px-5">
      <Navbar name="Complaint Service" />
      <div className="pt-5">
        <SearchBar
          handleCancel={handleCancel}
          isMiddleBtnActive={isActiveBtn}
          disabled={checkedRows?.length <= 0}
          handleReturn={handleReturn}
          handleDelete={handleDelete}
          isMiddleBtn
          linkValue={`${
            activeRoute ? "/add-warranty-complaint" : "/add-complaint"
          }`}
          link
        />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={btnValue} />
          <div className="pt-5">
            <CommonTable
              itemData={complaints}
              headerData={complaintsTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
              link="/complaints-service-details"
              btnLink="/recipe"
              btnValue="Invoice"
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

export default ComplaintListService;

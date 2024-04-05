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
import { useGetComplaintsQuery } from "../../../redux/features/api/complaints";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../common/components/Status Group";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import CommonTable from "../../../common/components/Common Table/CommonTable";

//internal

const ComplaintsDeliveryService = () => {
  const [complaints, setComplaints] = useState<TableBodyProps[] | []>([]);
  const [activeRoute, setActiveRoute] = useState(false);
  const [searchParams] = useSearchParams();
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    query,
    token,
  });
  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
    if (!complaintsLoading && !complaintsError) {
      setComplaints(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);

  const handleDelivery = () => {
    console.log(checkedRows);
  };
  const handleDelete = () => {
    console.log(checkedRows);
  };
  const handleReturn = () => {
    console.log(checkedRows);
  };

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Complaints Delivered Service" />
      <div className="pt-5">
        <SearchBar
          disabled={checkedRows?.length <= 0}
          handleDelivery={handleDelivery}
          handleReturn={handleReturn}
          handleDelete={handleDelete}
          isMiddleBtn
          link={`${activeRoute ? "/add-warranty-complaint" : "/add-complaint"}`}
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

export default ComplaintsDeliveryService;

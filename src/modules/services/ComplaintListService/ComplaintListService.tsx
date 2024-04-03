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
} from "./config/constants";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../common/components/Status Group";
import ComplaintTable from "./Partials/ComplaintsTable/ComplaintsTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { useGetServicesQuery } from "../../../redux/features/api/service";

//internal

const ComplaintListService = () => {
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
  } = useGetServicesQuery({
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

  const handleCheckboxChange = (index: string) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };
  const handleAllCheckboxChange = () => {
    if (checkedRows.length === complaints?.length) {
      // If all checkboxes are already checked, uncheck them all
      setCheckedRows([]);
    } else {
      // If not all checkboxes are checked, set checkedRows to contain all _id values
      const allIds =
        complaints?.map((item) => item?.id).filter((id) => id !== undefined) ||
        []; // Filter out undefined values
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };
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
      <Navbar name="Complaint Service" />
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
            <ComplaintTable
              Link="/complaints/order-details"
              itemData={complaints}
              HeaderData={complaintsTableHeader}
              checkedRows={checkedRows}
              handleCheckboxChange={handleCheckboxChange}
              handleAllCheckboxChange={handleAllCheckboxChange}
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

export default ComplaintListService;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import { btnValue, complaintsTableHeader, fields, keys } from "./config/constants";
import ComplaintTable from "./Partials/ComplaintsTable/ComplaintsTable";
import {
  authKey
} from "../../../../shared/config/constaints";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { constructQuery } from "../../../../shared/helpers/constructQuery";

//internal

const Complaint = () => {
  const [complaints, setComplaints] = useState();
  const [activeRoute, setActiveRoute] = useState(false);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys)
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

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Complaint"></Navbar>
      <div className="pt-5">
        <SearchBar
          link={`${activeRoute ? "/add-warranty-complaint" : "/add-complaint"}`}
        ></SearchBar>
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={btnValue} />
          <div className="pt-5">
            <ComplaintTable
              Link="/complaints/order-details"
              itemData={complaints}
              HeaderData={complaintsTableHeader}
            />
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  );
};

export default Complaint;

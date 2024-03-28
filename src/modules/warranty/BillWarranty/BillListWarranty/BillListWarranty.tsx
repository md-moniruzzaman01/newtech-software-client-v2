import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import BillTable from "./partials/BillTable";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import { BillTableHeader } from "./config/constant";

const BillListWarranty = () => {
  const [billData, setBillData] = useState([]);

  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    token,
  });

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setBillData(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);
  return (
    <div className=" px-5">
      <Navbar name="Warranty Bill List" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={[]} />
          <div className="pt-5">
            <BillTable
              view
              Link="/complaints/order-details"
              itemData={billData}
              HeaderData={BillTableHeader}
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

export default BillListWarranty;

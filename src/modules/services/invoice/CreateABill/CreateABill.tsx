import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import BillServicePendingTable from "./Partials/BillServicePendingTable/CreateBillServiceTable";
import { CreateBillServiceTableHeader } from "./config/constants";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";

const BillListWarranty = () => {
  const [billData, setBillData] = useState([]);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);

  // const [engineers, setEngineers] = useState([]);
  // const [selectEngineer, setSelectEngineer] =
  //   useState<EngineerDateProps>(qcSelectData);

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

  const handleCheckboxChange = (index: string) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };
  const handleAllCheckboxChange = () => {
    if (checkedRows.length === billData?.length) {
      // If all checkboxes are already checked, uncheck them all
      setCheckedRows([]);
    } else {
      // If not all checkboxes are checked, set checkedRows to contain all _id values
      const allIds =
        billData
          ?.map((item: { _id: string }) => item?._id)
          .filter((id) => id !== undefined) || []; // Filter out undefined values
      if (allIds.length > 0) {
        setCheckedRows(allIds as string[]);
      }
    }
  };

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Create Bill Service" />
      <div className="pt-5">
        <SearchBar
          linkBtn="Generate Invoice"
          link="/service-invoice"
          isTrue={checkedRows?.length <= 0}
          checkedRows={checkedRows}
        />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={[]} />
          <div className="pt-5">
            <BillServicePendingTable
              HeaderData={CreateBillServiceTableHeader}
              itemData={billData}
              Link="/qc/order-details"
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

export default BillListWarranty;

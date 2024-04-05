import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useGetComplaintsQuery } from "../../../../redux/features/api/complaints";
import { BillServiceTableHeader, tableLayout } from "./config/constants";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import CommonTable from "../../../../common/components/Common Table/CommonTable";

const BillList = () => {
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

  console.log(checkedRows);

  if (complaintsLoading) {
    return <LoadingPage />;
  }
  return (
    <div className=" px-5">
      <Navbar name="Service Bill List" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={[]} />
          <div className="pt-5">
            <CommonTable
              itemData={billData}
              headerData={BillServiceTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              link="/complaints-service-payments"
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

export default BillList;

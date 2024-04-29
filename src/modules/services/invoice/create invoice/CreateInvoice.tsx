import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { CreateBillServiceTableHeader, tableLayout } from "./config/constants";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { useDispatch } from "react-redux";
import { setIds } from "../../../../redux/features/slice/Complaints service Ids for payment/ComplaintsServicePaymentIds";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { useGetServicesForBillQuery } from "../../../../redux/features/api/service";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useCreateBillMutation } from "../../../../redux/features/api/bill";

const CreateInvoice = () => {
  const [billData, setBillData] = useState([]);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);

  const [createBill, { isLoading }] = useCreateBillMutation();
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetServicesForBillQuery({
    token,
  });

  useEffect(() => {
    if (complaintsData) {
      setTotalItems(complaintsData.meta.total);
      setLimit(complaintsData.meta.limit);
      setCurrentPage(complaintsData?.meta?.page);
    }
  }, [complaintsData]);

  useEffect(() => {
    if (!complaintsLoading && !complaintsError) {
      setBillData(complaintsData?.data);
    }
    dispatch(setIds(checkedRows));
  }, [
    complaintsData,
    complaintsLoading,
    complaintsError,
    checkedRows,
    dispatch,
  ]);

  const handleBillGenerate = async () => {
    const fullData = {
      complaintIds: checkedRows,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await createBill({ fullData, token });

    if (result?.data?.success) {
      navigate(`/complaints-service-payments/${result?.data?.data[0]?.id}`);
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }
  };

  if (complaintsLoading) {
    return <LoadingPage />;
  }
console.log("generate bill",complaintsData)
  return (
    <div className=" px-5">
      <Navbar name="Create Bill Service" />
      <div className="pt-5">
        <SearchBar
          linkBtn="Generate Invoice"
          isTrue={checkedRows?.length <= 0}
          checkedRows={checkedRows}
          handleBillGenerate={handleBillGenerate}
          generateBtnLoading={isLoading}
          fnBtn
        />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <CommonTable
              itemData={billData}
              headerData={CreateBillServiceTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
            />
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
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

export default CreateInvoice;

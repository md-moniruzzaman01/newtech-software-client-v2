import { useEffect, useState } from "react";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import {
  BillServiceTableHeader,
  btnValue,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import {
  useDeleteBillMutation,
  useGetBillsQuery,
} from "../../../../redux/features/api/bill";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";
import ConditionalBtnInSearch from "./partials/conditionalBtnInSearch/ConditionalBtnInSearch";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import swal from "sweetalert";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const InvoiceList = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);

  const [searchParams] = useSearchParams();

  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const {
    data: billData,
    error,
    isError: billsError,
    isLoading: billsLoading,
  } = useGetBillsQuery({
    token,
    query,
  });

  const [deleteBill] = useDeleteBillMutation();

  useEffect(() => {
    if (billData) {
      setTotalItems(billData.meta.total);
      setLimit(billData.meta.limit);
      setCurrentPage(billData?.meta?.page);
    }
  }, [billData]);

  const handleDeleteBil = async (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this bill details!",
      icon: "warning",
      buttons: ["Cancel", "OK"], // Set button labels
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await deleteBill({ id, token });
        showSwal(result);
      } else {
        swal("Your bill details is safe!");
      }
    });
  };

  if (billsLoading) {
    return <LoadingPage />;
  }
  if (billsError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="Service Bill List" />
      <div className="pt-5 flex justify-between">
        <div className="w-1/2">
          <SearchBar />
        </div>
        <div>
          <ConditionalBtnInSearch />
        </div>
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup btnGroupValue={btnValue} status />
          <div className="pt-5">
            <CommonTable
              itemData={billData?.data}
              headerData={BillServiceTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              link="/complaints-service-payments"
              btnValue="Invoice"
              btnLink="/service-invoice"
              checkbox
              deleteBtn="Delete"
              deleteFn={handleDeleteBil}
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

export default InvoiceList;

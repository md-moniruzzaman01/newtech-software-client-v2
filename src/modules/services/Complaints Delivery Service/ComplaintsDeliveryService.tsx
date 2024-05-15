/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { TableBodyProps } from "./config/types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import {
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useGetReadyForDelivaryServicesQuery } from "../../../redux/features/api/complaints";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";

import Pagination from "../../../common/widgets/Pagination/Pagination";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { useCreateBillMutation } from "../../../redux/features/api/bill";
import swal from "sweetalert";
import { showSwal } from "../../../shared/helpers/SwalShower.ts";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";

//internal

const ComplaintsDeliveryService = () => {
  const [complaints, setComplaints] = useState<TableBodyProps[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const [createBill, { isLoading }] = useCreateBillMutation();

  const {
    data: complaintsData,
    isError: complaintsIsError,
    isLoading: complaintsLoading,
    error: complaintsError,
  } = useGetReadyForDelivaryServicesQuery({
    query,
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
    if (!complaintsLoading && !complaintsIsError) {
      setComplaints(complaintsData?.data);
    }
  }, [complaintsData, complaintsLoading, complaintsIsError]);

  const handleDelivery = () => {
    console.log(checkedRows);
  };
  const handleDelete = () => {
    console.log(checkedRows);
  };
  const handleReturn = () => {
    console.log(checkedRows);
  };

  const handleBillGenerate = async () => {
    const token = getFromLocalStorage(authKey);
    const fullData = {
      complaintIds: checkedRows,
    };

    const result: any = await createBill({ fullData, token });
    const swalIsTrue = showSwal(result);

    if (swalIsTrue) {
      navigate(`/complaints-service-payments/${result?.data?.data[0]?.id}`);
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }
  };

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  if (complaintsIsError) {
    return <ErrorShow error={complaintsError} />;
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
          fnBtn
          handleBillGenerate={handleBillGenerate}
          generateBtnLoading={isLoading}
          checkedRows={checkedRows}
          linkBtn="Generate Invoice"
        />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <div className="pt-5">
            <CommonTable
              itemData={complaints}
              headerData={complaintsTableHeader}
              dataLayout={tableLayout}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
              link="/complaints-service-details"
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

export default ComplaintsDeliveryService;

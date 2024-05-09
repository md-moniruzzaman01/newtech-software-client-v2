/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import {
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import {
  useGetReadyForDelivaryComplaintsQuery,
  useUpdateComplaintsStatusDeliveryMutation,
} from "../../../../redux/features/api/complaints";
import swal from "sweetalert";
import { showSwal } from "../../../../shared/helpers/SwalShower";

const ComplaintsDelivered = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 50;
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const [updateDeliveryComplaints, { isLoading: deliveryStatusLoading }] =
    useUpdateComplaintsStatusDeliveryMutation();
  const { data, isError, isLoading } = useGetReadyForDelivaryComplaintsQuery({
    query,
    token,
  });

  const fullData = checkedRows;

  const handleDelivery = () => {
    swal({
      title: "Are you sure?",
      text: "Once updated, you will not be able to recover this all complaints's status!",
      icon: "warning",
      buttons: ["Cancel", "OK"], // Set button labels
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result: any = await updateDeliveryComplaints({ token, fullData });
        showSwal(result);
        if (result?.data.success) {
          setCheckedRows([]);
        }
      } else {
        swal("Your all complaints status is safe!");
      }
    });
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return (
      <div>
        <div>
          <h1>Somethings Wrong</h1>
          <p>Please contact to Developer.</p>
        </div>
      </div>
    );
  }
  return (
    <div className=" px-5">
      <Navbar name="Ready for Delivery" />
      <div className="pt-5">
        <SearchBar
          isDeliveryLoading={deliveryStatusLoading}
          handleDelivery={handleDelivery}
          isMiddleBtn
          disabled={checkedRows?.length <= 0}
          isMiddleBtnActive="Completed"
        />
      </div>
      <div className="mt-5 p-3 bg-solidWhite relative">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <CommonTable
              setCheckedRows={setCheckedRows}
              checkbox
              checkedRows={checkedRows}
              itemData={data?.data}
              headerData={complaintsTableHeader}
              link="/complaints/order-details"
              dataLayout={tableLayout}
            />
          </div>
        </div>
        <div className="fixed bottom-5 right-5">
          <Pagination
            limit={limit}
            totalItems={data?.meta?.total}
            currentPage={data?.meta?.page}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ComplaintsDelivered;

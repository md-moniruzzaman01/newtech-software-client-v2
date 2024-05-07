/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useDeleteComplaintsMutation,
  useGetComplaintsQuery,
  useUpdateComplaintsStatusDeliveryMutation,
} from "../../../../redux/features/api/complaints";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import {
  btnValue,
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import { authKey } from "../../../../shared/config/constaints";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { TableBodyProps } from "./config/types";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import swal from "sweetalert";

//internal

const Complaint = () => {
  const [isActiveBtn, setIsActiveBtn] = useState("");

  const [complaints, setComplaints] = useState<TableBodyProps[] | []>([]);
  const [activeRoute, setActiveRoute] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [searchParams] = useSearchParams();
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);

  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintsQuery({
    query,
    token,
  });

  const [updateDeliveryComplaints, { isLoading: deliveryStatusLoading }] =
    useUpdateComplaintsStatusDeliveryMutation();

  const [deleteComplaints, { isLoading: deleteLoading }] =
    useDeleteComplaintsMutation();

  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
    if (!complaintsLoading && !complaintsError) {
      setComplaints(complaintsData?.data);
      setTotalItems(complaintsData.meta.total);
      setLimit(complaintsData.meta.limit);
      setCurrentPage(complaintsData?.meta?.page);
    }
  }, [complaintsData, complaintsLoading, complaintsError]);
  useEffect(() => {
    if (searchParams?.get("repair_status")) {
      setIsActiveBtn(searchParams?.get("repair_status"));
    } else {
      setIsActiveBtn("");
    }
  }, [searchParams]);

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
  const handleDelete = async () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this all complaints details!",
      icon: "warning",
      buttons: ["Cancel", "OK"], // Set button labels
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result: any = await deleteComplaints({ token, fullData });
        showSwal(result);
        if (result?.data.success) {
          setCheckedRows([]);
        }
      } else {
        swal("Your all complaints details is safe!");
      }
    });
  };
  const handleReturn = () => {
    console.log(checkedRows);
  };

  if (complaintsLoading) {
    return <LoadingPage />;
  }
  return (
    <div className=" px-5">
      <Navbar name="Complaint"></Navbar>
      <div className="pt-5">
        <SearchBar
          isMiddleBtnActive={isActiveBtn}
          disabled={checkedRows?.length <= 0}
          handleDelivery={handleDelivery}
          isDeliveryLoading={deliveryStatusLoading}
          handleReturn={handleReturn}
          handleDelete={handleDelete}
          isDeleteLoading={deleteLoading}
          isMiddleBtn
          linkValue={`${
            activeRoute ? "/add-warranty-complaint" : "/add-complaint"
          }`}
          link
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
              link="/complaints/order-details"
            />
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            limit={limit}
          ></Pagination>
        </div>
      </div>
    </div>
  );
};

export default Complaint;

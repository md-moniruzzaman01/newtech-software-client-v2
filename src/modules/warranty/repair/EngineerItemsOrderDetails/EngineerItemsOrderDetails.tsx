import EngineerItemOrderDetailsTable from "./partials/EngineerItemOrderDetailsTable";
import EngineerItemOrderStatus from "./partials/EngineerItemOrderStatus";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { authKey } from "../../../../shared/config/constaints";
import { useState } from "react";
import EngineerPartsReplace from "./partials/EngineerPartsReplace";
import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useGetRepairByIdQuery } from "../../../../redux/features/api/repair";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const EngineerItemsOrderDetails = () => {
  const [select_parts_replece, setSelect_parts_replace] = useState(1);
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data, isError, isLoading, error } = useGetRepairByIdQuery({
    id,
    token,
  });
  function showContainer(containerNumber: number) {
    switch (containerNumber) {
      case 1:
        return <EngineerItemOrderStatus />;

      case 2:
        return <EngineerPartsReplace id={id} repairId={data?.data?.repairId} />;
    }
  }
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className="px-5">
      <Navbar name={"Complaint Order Details (Engineer)"} />

      <div className="grid grid-cols-3 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails={data?.data?.repair?.received_date
            ?.toString()
            ?.slice(0, 10)}
          bgColor="primary"
          headerTitle="Received Date"
        />
        <ComplaintHeaderCard
          headerDetails={data?.data?.repair?.turnaround_time
            ?.toString()
            ?.slice(0, 10)}
          bgColor="primary"
          headerTitle="TAT"
        />
        <ComplaintHeaderCard
          headerDetails={data?.data?.status}
          bgColor="primary"
          headerTitle="Status"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Customer Details"
          CardInformation={[
            {
              title: "Name",
              value: data?.data?.repair?.customer?.contact_person,
            },
            {
              title: "Number",
              value: data?.data?.repair?.customer?.contactNo,
            },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Repair Details"
          CardInformation={[
            {
              title: "Order No",
              value: data?.data?.repair?.order_number,
            },
            {
              title: "Receiver Date",
              value: data?.data?.repair?.receiver,
            },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Product Details"
          CardInformation={[
            {
              title: "Brand",
              value: data?.data?.repair?.products?.brand_name,
            },
            {
              title: "Category",
              value: data?.data?.repair?.products?.category_name,
            },
          ]}
        />

        <div className="col-span-2 bg-solidWhite px-5 py-5  relative h-full">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            {/* <div>
              <MdModeEdit />
            </div> */}
          </div>
          <EngineerItemOrderDetailsTable data={data?.data} />
        </div>

        <div className=" bg-solidWhite px-5 py-5">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
            {/* <div>
              <MdModeEdit />
            </div> */}
          </div>

          <select
            name=""
            id=""
            onChange={(e) =>
              setSelect_parts_replace(parseInt(e.target.value, 10))
            }
          >
            <option value={1}>No Need To change parts</option>
            <option value={2}>Need parts to Repair</option>
          </select>

          {showContainer(select_parts_replece)}
        </div>
      </div>
    </div>
  );
};

export default EngineerItemsOrderDetails;

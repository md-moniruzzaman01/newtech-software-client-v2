import { MdModeEdit } from "react-icons/md";
import EngineerItemOrderDetailsTable from "./partials/EngineerItemOrderDetailsTable";
import EngineerItemOrderStatus from "./partials/EngineerItemOrderStatus";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { ComplaintDetails, authKey } from "../../../../shared/config/constaints";
import { useState } from "react";
import EngineerPartsReplace from "./partials/EngineerPartsReplace";
import { useParams } from "react-router-dom";
import { useGetRepairByIdQuery } from "../../../../redux/features/api/repair";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const EngineerItemsRepairDetails = () => {
  const [select_parts_replece, setSelect_parts_replace] = useState(1);
  const {id}=useParams()
  const token = getFromLocalStorage(authKey);
const {data,isError, isLoading,error}=useGetRepairByIdQuery({id,token})
  function showContainer(containerNumber: number) {
    switch (containerNumber) {
      case 1:
        return (
          <EngineerItemOrderStatus />
        );

      case 2:
        return <EngineerPartsReplace id={data?.data?.repairId} />;

    }
  }

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error}/>;
  }
  return (
    <div className="px-5">
      <Navbar name={"Complaint Order Details (Engineer)"} />

      <div className="grid grid-cols-3 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails={data?.data?.updatedAt.toString().slice(0,10) || ''}
          bgColor="primary"
          headerTitle="Repair assign Date"
        />
        <ComplaintHeaderCard
          headerDetails={data?.data?.repair?.received_date?.toString().slice(0,10) || ''}
          bgColor="primary"
          headerTitle="Complaint Received"
        />
        <ComplaintHeaderCard
          headerDetails={data?.data?.repair?. turnaround_time?.toString().slice(0,10) || ''}
          bgColor="primary"
          headerTitle="TAT Time"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Branch"
          CardInformation={[{title:"Branch", value:data?.data.repair?.branch},{title:"Received By", value:data?.data.repair?.receiver}]}
        />
        <ComplaintDetailsCard
          headerTitle="Billing Address"
          CardInformation={ComplaintDetails}
        />
        <ComplaintDetailsCard
          headerTitle="Complaint Details"
          CardInformation={[{title:"order number", value:data?.data.repair?.order_number}]}
        />

        <div className="col-span-2 bg-solidWhite px-5 py-5  relative h-full">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summery</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <EngineerItemOrderDetailsTable product={data?.data?.repair?.products || {}}/>
        </div>

        <div className=" bg-solidWhite px-5 py-5">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>

          <select name="" id="" onChange={(e) => setSelect_parts_replace(parseInt(e.target.value, 10))}>
            <option value={1}>No Need To change parts</option>
            <option value={2}>Need parts to Repair</option>
          </select>

          {showContainer(select_parts_replece)}

        </div>
      </div>
    </div>
  );
};

export default EngineerItemsRepairDetails;

import { MdModeEdit } from "react-icons/md";
//internal
import QAItemOrderDetailsTable from "./partials/QAItemOrderDetailsTable";
import QAItemOrderStatus from "./partials/QAItemOrderStatus";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import {
  ComplaintDetails,
  authKey,
} from "../../../../shared/config/constaints";
import { useParams } from "react-router-dom";
import { useGetQAQuery } from "../../../../redux/features/api/qa";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

const QAItemOrderDetails = () => {
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data } = useGetQAQuery({ id, token });
  console.log(data);
  return (
    <div className="px-5">
      <Navbar name={"Complaint Order Details (QA)"} />

      <div className="grid grid-cols-3 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Created Date"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Due Date"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Name"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Branch Address"
          CardInformation={ComplaintDetails}
        />
        <ComplaintDetailsCard
          headerTitle="Billing Address"
          CardInformation={ComplaintDetails}
        />
        <ComplaintDetailsCard
          headerTitle="Invoice Details"
          CardInformation={ComplaintDetails}
        />

        <div className="col-span-2 bg-solidWhite px-5 py-5 relative">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summery</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <QAItemOrderDetailsTable />
        </div>

        <div className=" bg-solidWhite px-5 py-5 ">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <QAItemOrderStatus />
        </div>
      </div>
    </div>
  );
};

export default QAItemOrderDetails;

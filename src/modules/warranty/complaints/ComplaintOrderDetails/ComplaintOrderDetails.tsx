import { MdModeEdit } from "react-icons/md";
//internal
import ComplaintOrderDetailsTable from "./partials/ComplaintOrderDetailsTable";
import ComplaintOrderStatus from "./partials/ComplaintOrderStatus";
import ComplaintMiniCard from "./partials/ComplaintMiniCard";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { ComplaintDetails } from "../../../../shared/config/constaints";
import { useParams } from "react-router-dom";
import { useGetComplaintByIdQuery } from "../../../../redux/features/api/complaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useEffect, useState } from "react";

const ComplaintOrderDetails = () => {
  const { id } = useParams();
  const [complaintsSingleData, setComplaintsSingleData] = useState([]);
  const token = getFromLocalStorage("token");
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintByIdQuery({ id, token });
  useEffect(() => {
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData);
    }
  }, [complaintsData, complaintsError, complaintsLoading]);
  console.log(complaintsSingleData);
  return (
    <div className="px-5">
      <Navbar name={"Complaint's Order Details"} />

      <div className="grid grid-cols-5 gap-2 pt-8">
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
        <ComplaintHeaderCard
          headerDetails="fahimkhandakar1@gmail.com"
          bgColor="primary"
          headerTitle="Email"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Contact No"
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

        <div className="col-span-2 bg-solidWhite px-5 py-5">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summery</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <ComplaintOrderDetailsTable />
        </div>

        <div className=" bg-solidWhite px-5 py-5">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <ComplaintOrderStatus />
        </div>
      </div>

      <div className="grid grid-cols-5 mb-5 gap-5">
        <ComplaintMiniCard
          name="John Doe"
          header="Receiver Info"
          img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          notes="Hello world"
        />
        <ComplaintMiniCard
          name="John Doe"
          header="Receiver Info"
          img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          notes="Hello world"
        />
        <ComplaintMiniCard
          name="John Doe"
          header="Receiver Info"
          img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          notes="Hello world"
        />
        <ComplaintMiniCard
          name="John Doe"
          header="Receiver Info"
          img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          notes="Hello world"
        />
        <ComplaintMiniCard
          name="John Doe"
          header="Receiver Info"
          img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          notes="Hello world"
        />
      </div>
    </div>
  );
};

export default ComplaintOrderDetails;

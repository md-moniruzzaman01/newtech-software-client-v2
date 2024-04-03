import { useNavigate, useParams } from "react-router-dom";
import { ComplaintsOrderDetailsProps } from "./config/types";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { useGetComplaintByIdQuery } from "../../../redux/features/api/complaints";
import { ComplaintDetails, authKey } from "../../../shared/config/constaints";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import ComplaintOrderDetailsTable from "./partials/ComplaintOrderDetailsTable";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Button from "../../../common/components/Button";
import { MdModeEdit } from "react-icons/md";

const ComplaintsServicePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const serviceAllIds = useSelector(
    (state: RootState) => state.complaintsServiceIds.serviceAllIds
  );
  const [isEdit, setIsEdit] = useState(true);
  console.log(serviceAllIds);
  const [complaintsSingleData, setComplaintsSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintByIdQuery({ id, token });
  useEffect(() => {
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data);
    }
  }, [complaintsData, complaintsError, complaintsLoading]);

  const handleSubmitPayment = () => {
    navigate("/service-invoice");
  };

  return (
    <div className="px-5">
      <Navbar name={"Complaint's Service Payments"} />

      <div className="grid grid-cols-5 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.createdAt
            .toString()
            .slice(0, 10)}
          bgColor="primary"
          headerTitle="Created Date"
        />
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.turnaround_time
            .toString()
            .slice(0, 10)}
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
          headerDetails={complaintsSingleData?.customer_contact_number}
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
        <div className="col-span-3 bg-solidWhite px-5 py-5">
          <div className="flex justify-between  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summery</h2>
            <div
              className={`cursor-pointer hover:text-shadeOfRed ${
                !isEdit && "text-shadeOfRed"
              }`}
            >
              <MdModeEdit onClick={() => setIsEdit(!isEdit)} />
            </div>
          </div>
          <ComplaintOrderDetailsTable isEdit={isEdit} id={id} />
          <div className=" w-1/3 mx-auto py-10">
            <Button onClick={handleSubmitPayment} className="w-full" primary>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsServicePayment;

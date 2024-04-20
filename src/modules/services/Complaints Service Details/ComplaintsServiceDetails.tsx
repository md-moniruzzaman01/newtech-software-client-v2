import { MdModeEdit } from "react-icons/md";
//internal
import ComplaintOrderDetailsTable from "./partials/ComplaintOrderDetailsTable";
import ComplaintOrderStatus from "./partials/ComplaintOrderStatus";
import ComplaintMiniCard from "./partials/ComplaintMiniCard";

import { useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps } from "./config/types";
import { NavLink, useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { ComplaintDetails, authKey } from "../../../shared/config/constaints";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { useGetServicesByIdQuery } from "../../../redux/features/api/service";

const ComplaintsServiceDetails = () => {
  const { id } = useParams();
  const [complaintsSingleData, setComplaintsSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const [isEdit, setIsEdit] = useState(true);
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetServicesByIdQuery({ id, token });
  useEffect(() => {
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data);
    }
  }, [complaintsData, complaintsError, complaintsLoading]);

  return (
    <div className="px-5">
      <Navbar name={"Complaint's Order Details"} />

      <div className="grid grid-cols-5 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.createdAt
            ?.toString()
            ?.slice(0, 10)}
          bgColor="primary"
          headerTitle="Created Date"
        />
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.turnaround_time
            ?.toString()
            ?.slice(0, 10)}
          bgColor="primary"
          headerTitle="Due Date"
        />
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.Nonwarrentycustomer?.name}
          bgColor="primary"
          headerTitle="Name"
        />
        <ComplaintHeaderCard
          headerDetails={
            complaintsSingleData?.Nonwarrentycustomer_contact_number
          }
          bgColor="primary"
          headerTitle="Number"
        />
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.repair_status}
          bgColor="primary"
          headerTitle="Repair Status"
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
              <NavLink
                className="text-solidBlack"
                to={`/complaints-edit-page/${id}`}
              >
                <MdModeEdit />
              </NavLink>
            </div>
          </div>
          <ComplaintOrderDetailsTable id={id} />
        </div>

        <div className=" bg-solidWhite px-5 py-5">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
            <div
              className={`cursor-pointer hover:text-shadeOfRed ${
                !isEdit && "text-shadeOfRed"
              }`}
            >
              <MdModeEdit onClick={() => setIsEdit(!isEdit)} />
            </div>
          </div>
          <ComplaintOrderStatus
            isEdit={isEdit}
            branch={complaintsSingleData?.branch}
            defaultOrderStatus="Select Status"
            defaultRepairStatus={complaintsSingleData?.repair_status}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 mb-5 gap-5">
        {complaintsSingleData?.Qa?.length > 0 &&
          complaintsSingleData?.Qa?.map((item, index) => (
            <ComplaintMiniCard
              key={index}
              name={`Status: ${item?.status}`}
              header={`ID: ${item?.qa_checker_id}`}
              notes={`${item?.serial_number}`}
            />
          ))}
        {complaintsSingleData?.Qc?.length > 0 &&
          complaintsSingleData?.Qc?.map((item, index) => (
            <ComplaintMiniCard
              key={index}
              name={`Status: ${item?.status}`}
              header={`ID: ${item?._id}`}
              notes={`${item?.serial_number}`}
            />
          ))}
        {complaintsSingleData?.RepairItem?.length > 0 &&
          complaintsSingleData?.RepairItem?.map((item, index) => (
            <ComplaintMiniCard
              key={index}
              name={`Status: ${item?.status}`}
              header={`ID: ${item?._id}`}
              notes={`${item?.serial_number}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ComplaintsServiceDetails;

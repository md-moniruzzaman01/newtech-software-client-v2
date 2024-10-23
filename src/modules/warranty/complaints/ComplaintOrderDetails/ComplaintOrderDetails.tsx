import { MdModeEdit } from "react-icons/md";
//internal
import ComplaintOrderDetailsTable from "./partials/ComplaintOrderDetailsTable";
import ComplaintMiniCard from "./partials/ComplaintMiniCard";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { authKey } from "../../../../shared/config/constaints";
import { NavLink, useParams } from "react-router-dom";
import { useGetComplaintByIdQuery } from "../../../../redux/features/api/complaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useEffect, useState } from "react";
import { ComplaintsOrderDetailsProps } from "./config/types";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import ComplaintOrderStatus from "./partials/ComplaintOrderStatus";
import { isUserAdmin } from "../../../../services/auth.service";

const ComplaintOrderDetails = () => {
  const { id } = useParams();
  const [complaintsSingleData, setComplaintsSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const [isEdit, setIsEdit] = useState(true);
  const token = getFromLocalStorage(authKey);

  const {
    data: complaintsData,
    isError: complaintsIsError,
    isLoading: complaintsLoading,
    error: complaintsError,
  } = useGetComplaintByIdQuery({ id, token });

  useEffect(() => {
    if (!complaintsIsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data);
    }
  }, [complaintsData, complaintsIsError, complaintsLoading]);

  if (complaintsLoading) {
    return <LoadingPage />;
  }
  if (complaintsError) {
    return <ErrorShow error={complaintsError} />;
  }

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
          headerDetails={complaintsSingleData?.completed_date
            ?.toString()
            ?.slice(0, 10)}
          bgColor="primary"
          headerTitle="Completed Date"
        />
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.category_name}
          bgColor="primary"
          headerTitle="Category Name"
        />
        {/* <ComplaintHeaderCard
          headerDetails={
            complaintsSingleData?.Nonwarrentycustomer_contact_number
          }
          bgColor="primary"
          headerTitle="Number"
        /> */}
        <ComplaintHeaderCard
          headerDetails={complaintsSingleData?.repair_status}
          bgColor="primary"
          headerTitle="Repair Status"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Customer Details"
          CardInformation={[
            {
              title: "Name",
              value: complaintsSingleData?.customer?.contact_person,
            },
            {
              title: "Number",
              value: complaintsSingleData?.customer?.contactNo,
            },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Billing Address"
          CardInformation={[
            {
              title: "Total Charge",
              value: complaintsSingleData?.total_charge,
            },
            {
              title: "Due",
              value:
                complaintsSingleData?.due || complaintsSingleData?.total_charge,
            },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Complaints Details"
          CardInformation={[
            {
              title: "Receiver ID",
              value: complaintsSingleData?.receiver,
            },
            {
              title: "Order No",
              value: complaintsSingleData?.order_number,
            },
          ]}
        />

        <div
          className={`${
            isUserAdmin() ? "col-span-2" : "col-span-3"
          } bg-solidWhite px-5 py-5`}
        >
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

        {isUserAdmin() && (
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
              id={id}
              isEdit={isEdit}
              defaultOrderStatus={complaintsSingleData?.repair_status}
              // defaultRepairStatus={}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-5 mb-5 gap-5 overflow-x-auto">
        {complaintsSingleData?.Qc?.length > 0 &&
          complaintsSingleData?.Qc?.map((item, index) => (
            <ComplaintMiniCard
              key={index}
              status={`Status: ${item?.status}`}
              name={`Name: ${
                item?.qc_checker_id?.Engineer?.name?.firstName +
                " " +
                item?.qc_checker_id?.Engineer?.name?.lastName
              }`}
              notes={`${item?.serial_number}`}
              date={item?.createdAt?.toString().slice(0, 10)}
              link={`/qc-all?searchTerm=${item?.serial_number}`}
            />
          ))}
        {complaintsSingleData?.Qa?.length > 0 &&
          complaintsSingleData?.Qa?.map((item, index) => (
            <ComplaintMiniCard
              key={index}
              status={`Status: ${item?.status}`}
              name={`Name: ${
                item?.qa_checker_id?.Engineer?.name?.firstName +
                " " +
                item?.qa_checker_id?.Engineer?.name?.lastName
              }`}
              date={`${item?.createdAt?.slice(0, 10)}`}
              notes={`${item?.serial_number}`}
              link={`/qa-all-items?searchTerm=${item?.serial_number}`}
            />
          ))}

        {complaintsSingleData?.RepairItem?.length > 0 &&
          complaintsSingleData?.RepairItem?.map((item, index) => (
            <ComplaintMiniCard
              key={index}
              status={`Status: ${item?.status}`}
              name={`Name: ${
                item?.engineer?.Engineer?.name?.firstName +
                " " +
                item?.engineer?.Engineer?.name?.lastName
              }`}
              notes={`${item?.serial_number}`}
              date={item?.createdAt?.toString().slice(0, 10)}
              note={item?.note}
              link={`/engineer-all-repairs?searchTerm=${item?.serial_number}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ComplaintOrderDetails;

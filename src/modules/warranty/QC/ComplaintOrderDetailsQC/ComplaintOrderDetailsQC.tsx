//internal
import ComplaintOrderDetailsTableQC from "./partials/ComplaintOrderDetailsTableQC";
import ComplaintOrderStatusQC from "./partials/ComplaintOrderStatusQC";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { authKey } from "../../../../shared/config/constaints";
import { useParams } from "react-router-dom";
import { useGetQcByIdQuery } from "../../../../redux/features/api/qc";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { useGetComplaintByIdQuery } from "../../../../redux/features/api/complaints";

const ComplaintOrderDetailsQC = () => {
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data: qcData, isLoading: gcIsLoading } = useGetQcByIdQuery({
    token,
    id,
  });

  const { data: complaintsData, isLoading: complaintsIsLoading } =
    useGetComplaintByIdQuery({
      token,
      id: qcData?.data?.repairId,
    });

  if (gcIsLoading || complaintsIsLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="px-5">
      <Navbar name={"Complaint's Order Details"} />

      <div className="grid grid-cols-3 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails={qcData?.data?.createdAt?.toString()?.slice(0, 10)}
          bgColor="primary"
          headerTitle="Created Date"
        />
        <ComplaintHeaderCard
          headerDetails={qcData?.data?.id}
          bgColor="primary"
          headerTitle="ID"
        />
        <ComplaintHeaderCard
          headerDetails={qcData?.data?.status}
          bgColor="primary"
          headerTitle="Status"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Customer Details"
          CardInformation={[
            { title: "ID", value: complaintsData?.data?.customer?.id },
            {
              title: "Name",
              value: complaintsData?.data?.customer?.contact_person,
            },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Other Details"
          CardInformation={[
            {
              title: "Order No",
              value: complaintsData?.data?.order_number,
            },
            {
              title: "Category",
              value: complaintsData?.data?.category_name,
            },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Product Details"
          CardInformation={[
            {
              title: "Received Date",
              value: complaintsData?.data?.received_date
                ?.toString()
                ?.slice(0, 10),
            },
            {
              title: "Total Charge",
              value: complaintsData?.data?.total_charge,
            },
          ]}
        />

        <div className="col-span-2 bg-solidWhite px-5  relative ">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summery</h2>
          </div>
          <ComplaintOrderDetailsTableQC data={qcData} data2={complaintsData} />
        </div>

        <div className=" bg-solidWhite px-5 py-5 relative">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
          </div>
          <ComplaintOrderStatusQC id={id} />
        </div>
      </div>
    </div>
  );
};

export default ComplaintOrderDetailsQC;

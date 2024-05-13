//internal
import QAItemOrderDetailsTable from "./partials/QAItemOrderDetailsTable";
import QAItemOrderStatus from "./partials/QAItemOrderStatus";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import { authKey } from "../../../../shared/config/constaints";
import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useGetQAProductsForServiceByIdQuery } from "../../../../redux/features/api/qa";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const QAItemOrderDetails = () => {
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, error } = useGetQAProductsForServiceByIdQuery({
    id,
    token,
  });
  if (isLoading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className="px-5">
      <Navbar name={"Complaint Order Details (QA)"} />

      <div className="grid grid-cols-3 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails={data?.data?.createdAt?.toString()?.slice(0, 10)}
          bgColor="primary"
          headerTitle="Created Date"
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
          headerTitle="QA Checker Details"
          CardInformation={[
            { title: "ID", value: data?.data?.qa_checker_id?.id },
            { title: "Role", value: data?.data?.qa_checker_id?.role },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Repair Details"
          CardInformation={[
            {
              title: "Receive Date",
              value: data?.data?.repair?.received_date?.toString().slice(0, 10),
            },
            {
              title: "Repair Status",
              value: data?.data?.repair?.repair_status,
            },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Product Details"
          CardInformation={[
            { title: "Category", value: data?.data?.repair?.category_name },
            {
              title: "Total Charge",
              value: data?.data?.repair?.total_charge,
            },
          ]}
        />

        <div className="col-span-2 bg-solidWhite px-5 py-5 relative">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Order Summery</h2>
            {/* <div>
              <MdModeEdit />
            </div> */}
          </div>
          <QAItemOrderDetailsTable data={data.data} />
        </div>

        <div className=" bg-solidWhite px-5 py-5 ">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-2xl font-semibold">Status Order</h2>
            {/* <div>
              <MdModeEdit />
            </div> */}
          </div>
          <QAItemOrderStatus />
        </div>
      </div>
    </div>
  );
};

export default QAItemOrderDetails;

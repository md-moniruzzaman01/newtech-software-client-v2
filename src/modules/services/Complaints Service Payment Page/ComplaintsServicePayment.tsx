import { useNavigate, useParams } from "react-router-dom";
import { ComplaintsOrderDetailsProps } from "./config/types";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import ComplaintHeaderCard from "../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import ComplaintDetailsCard from "../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import ComplaintOrderDetailsTable from "./partials/ComplaintOrderDetailsTable";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/store";
import Button from "../../../common/components/Button";
import { MdModeEdit } from "react-icons/md";
import { useGetBillByIdQuery } from "../../../redux/features/api/service";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";

const ComplaintsServicePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(true);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [totalHiddenDiscount, setTotalHiddenDiscount] = useState<number>(0);
  // const serviceAllIds = useSelector(
  //   (state: RootState) => state.complaintsServiceIds.serviceAllIds
  // );
  const [billSingleData, setBillSingleData] =
    useState<ComplaintsOrderDetailsProps | null>(null);
  const token = getFromLocalStorage(authKey);
  const {
    data: billData,
    isError: billError,
    isLoading: BillLoading,
  } = useGetBillByIdQuery({ id, token });

  useEffect(() => {
    if (!billError && !BillLoading) {
      setBillSingleData(billData?.data);
    }
  }, [billData, billError, BillLoading]);

  const handleSubmitPayment = () => {
    navigate("/service-invoice");
  };
  console.log("discount", totalDiscount);
  console.log("hidden", totalHiddenDiscount);
  if (BillLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="px-5">
      <Navbar name={"Complaint's Service Payments"} />

      <div className="grid grid-cols-5 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails={billSingleData?.createdAt.toString().slice(0, 10)}
          bgColor="primary"
          headerTitle="Created Date"
        />
        <ComplaintHeaderCard
          headerDetails={billSingleData?.id}
          bgColor="primary"
          headerTitle="ID"
        />
        <ComplaintHeaderCard
          headerDetails={
            billSingleData?.generatedby?.Engineer?.name?.firstName +
            " " +
            billSingleData?.generatedby?.Engineer?.name?.lastName
          }
          bgColor="primary"
          headerTitle="Name"
        />
        <ComplaintHeaderCard
          headerDetails={billSingleData?.generatedby?.Engineer?.id}
          bgColor="primary"
          headerTitle="Engineer ID"
        />
        <ComplaintHeaderCard
          headerDetails={billSingleData?.status}
          bgColor="primary"
          headerTitle="Status
          "
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Branch Address"
          CardInformation={[
            { title: "Branch", value: billSingleData?.branch },
            { title: "Address", value: null },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Billing Address"
          CardInformation={[
            { title: "Branch", value: null },
            { title: "Address", value: null },
          ]}
        />
        <ComplaintDetailsCard
          headerTitle="Invoice Details"
          CardInformation={[
            { title: "Branch", value: null },
            { title: "Address", value: null },
          ]}
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
          <ComplaintOrderDetailsTable
            totalDiscount={totalDiscount}
            totalHiddenDiscount={totalHiddenDiscount}
            setTotalDiscount={setTotalDiscount}
            setTotalHiddenDiscount={setTotalHiddenDiscount}
            isEdit={isEdit}
            id={id}
          />
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

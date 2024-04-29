/* eslint-disable @typescript-eslint/no-explicit-any */
import InventoryRequestCard from "../../../common/components/InventoryRequestCard/InventoryRequestCard";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { RxCross2 } from "react-icons/rx";
import InventoryRequestInfoDetails from "./partials/InventoryRequestInfoDetails";
import Button from "../../../common/components/Button";
import { useParams } from "react-router-dom";
import {
  useGetInventoryPartsByIdQuery,
  useInventoryApproveMutation,
  useInventoryRejectMutation,
} from "../../../redux/features/api/inventory";
import { useEffect, useState } from "react";
import { HeaderValueForInventoryRequestDetails } from "./config/constants";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey, emptyData } from "../../../shared/config/constaints";
import swal from "sweetalert";
import { ResponseData } from "./config/types";
import Modal from "../../../common/components/Modal/Modal";
import Input from "../../../common/components/Input";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";

const InventoryRequestDetailsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setamount] = useState(0);
  const token = getFromLocalStorage(authKey);
  const [inventoryApprove, { isLoading, isError, error }] = useInventoryApproveMutation();
  const [inventoryReject,{ isLoading:isLoadingReject, isError:isErrorReject, error:errorReject }] = useInventoryRejectMutation();
  const [inventoryData, setInventoryData] = useState<ResponseData>();
  const { id } = useParams();
  const {
    data: inventory,
    isError: isInventoryError,
    isLoading: inventoryLoading,
    error: inventoryError
  } = useGetInventoryPartsByIdQuery({ id });


  useEffect(() => {
    if (!isLoading && !isError) {
      setInventoryData(inventory?.data);
    }
  }, [inventory, isError, isLoading]);

  const handleInventoryApprove = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const fullData = {
      amount: amount,
      status: "Approve",
    };
    const result: any = await inventoryApprove({ id, token, fullData });
    if (result?.data?.success) {
      swal("Success", `${result?.data?.message}`, "success");
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }
  };
  const handleInventoryReject = async () => {
    const fullData = {
      status: "reject",
    };
    const result: any =await inventoryReject({ id, token, fullData });
    if (result?.data?.success) {
      swal("Success", `${result?.data?.message}`, "success");
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }
  };

  if (isLoading || inventoryLoading || isLoadingReject) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />
  }
  if (isInventoryError) {
    return <ErrorShow error={inventoryError} />
  }
  if (isErrorReject) {
    return <ErrorShow error={errorReject} />
  }

  console.log(inventory)
  return (
    <div className="px-5">
      <Navbar name="Inventory Request Details" />
      <div className="bg-solidWhite my-5">
        <div className="relative">
          <div className=" absolute right-5 top-5">
            <RxCross2 className="text-2xl cursor-pointer" />
          </div>
          <div className="text-center py-4">
            <h2 className="text-2xl font-medium">Request Details</h2>
          </div>
        </div>

        <div className="px-10">
          <h4 className="pb-3">
            <span className="font-medium">Requisitions No : </span>
            {inventoryData?.id}
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <InventoryRequestCard
              className="bg-lightMistyBlue"
              contact={inventoryData?.user?.asp?.toString() || emptyData}
              contactTitle="ASP"
              designation={inventoryData?.user?.role || emptyData}
              designationTitle="Designation"
              header="Engineer Info"
              name={inventoryData?.user?.id || emptyData}
              nameTitle="ID"
              team={inventoryData?.user?.branch?.toString() || emptyData}
              teamTitle="Branch"
            />
            <InventoryRequestCard
              className="bg-lightTurquoise"
              contact={
                inventoryData?.repair?.turnaround_time
                  ?.toString()
                  ?.slice(0, 10) || emptyData
              }
              contactTitle="TAT"
              designation={inventoryData?.repair?.brand_name || emptyData}
              designationTitle="Brand"
              header="Repair Info"
              name={inventoryData?.repair?.order_number || emptyData}
              nameTitle="Order No"
              team={inventoryData?.repair?.category_name || emptyData}
              teamTitle="Category"
            />
            <InventoryRequestCard
              className="bg-lightSkyBlue"
              contact={
                inventoryData?.repair?.received_date
                  ?.toString()
                  ?.slice(0, 10) || emptyData
              }
              contactTitle="Received Date"
              designation={inventoryData?.repair?.category_name || emptyData}
              designationTitle="Category"
              header="Product Info"
              name={inventoryData?.repair?.brand_name || emptyData}
              nameTitle="Brand"
              team={inventoryData?.repair?.repair_status || emptyData}
              teamTitle="Repair Status"
            />
            <div className="col-span-3 pb-8">
              <InventoryRequestInfoDetails
                itemData={inventoryData}
                headerData={HeaderValueForInventoryRequestDetails}
              />
            </div>
            {inventoryData?.status === "Approve" || (
              <div className="col-span-3 pb-10">
                <div className="flex justify-around items-center">
                  <Button
                    onClick={handleInventoryReject}
                    danger
                    className="!py-1"
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="!py-1 text-lg"
                  >
                    Approve
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal header={"Make Payments"} setIsOpen={setIsOpen} isOpen={isOpen}>
        <form onSubmit={handleInventoryApprove} className="space-y-4 p-2">
          <Input
            onChange={(e) => setamount(parseFloat(e.target.value))}
            inputPlaceholder="Amount..."
            inputName="amount"
            inputType="number"
          />
          <Button primary className="w-full">
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default InventoryRequestDetailsPage;

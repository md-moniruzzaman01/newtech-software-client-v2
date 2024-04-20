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
import { authKey } from "../../../shared/config/constaints";
import swal from "sweetalert";

const InventoryRequestDetailsPage = () => {
  const token = getFromLocalStorage(authKey);
  const [inventoryApprove] = useInventoryApproveMutation();
  const [inventoryReject] = useInventoryRejectMutation();
  const [inventoryData, setInventoryData] = useState();
  const { id } = useParams();
  const {
    data: inventory,
    isError,
    isLoading,
  } = useGetInventoryPartsByIdQuery({ id });

  useEffect(() => {
    if (!isLoading && !isError) {
      setInventoryData(inventory?.data);
    }
  }, [inventory, isError, isLoading]);

  const handleInventoryApprove = async () => {
    console.log("hello");
    const result: any = await inventoryApprove({ id, token });
    if (result?.data?.success) {
      swal("Success", `${result?.data?.message}`, "success");
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }
  };
  const handleInventoryReject = async () => {
    console.log("hello");
    const result: any = inventoryReject({ id, token });
    if (result?.data?.success) {
      swal("Success", `${result?.data?.message}`, "success");
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
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
            <span className="font-medium">Requisitions No : </span>#0514444
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <InventoryRequestCard
              className="bg-lightMistyBlue"
              contact="1245215561"
              designation="Developer"
              header="Engineer Info"
              name="John Doe"
              team="Software Engineer"
            />
            <InventoryRequestCard
              className="bg-lightTurquoise"
              contact="1245215561"
              designation="Developer"
              header="Engineer Info"
              name="John Doe"
              team="Software Engineer"
            />
            <InventoryRequestCard
              className="bg-lightSkyBlue"
              contact="1245215561"
              designation="Developer"
              header="Engineer Info"
              name="John Doe"
              team="Software Engineer"
            />
            <div className="col-span-3 pb-8">
              <InventoryRequestInfoDetails
                itemData={inventoryData}
                headerData={HeaderValueForInventoryRequestDetails}
              />
            </div>
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
                  onClick={handleInventoryApprove}
                  className="!py-1 text-lg"
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryRequestDetailsPage;

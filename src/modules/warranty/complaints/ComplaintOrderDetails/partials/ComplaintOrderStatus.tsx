import React, { useState } from "react";
import Button from "../../../../../common/components/Button";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import { orderStatus } from "../config/constants";
import { ComplaintsOrderStatusProps } from "../config/types";
import { useUpdateComplaintsStatusMutation } from "../../../../../redux/features/api/complaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { showSwal } from "../../../../../shared/helpers/SwalShower.ts";
import { useNavigate } from "react-router-dom";

const ComplaintOrderStatus: React.FC<ComplaintsOrderStatusProps> = ({
  isEdit = true,
  defaultOrderStatus = "",
  id = "",
}) => {
  const token = getFromLocalStorage(authKey);
  const navigate = useNavigate();
  // State variables to store the selected order and repair statuses
  const [selectedOrderStatus, setSelectedOrderStatus] =
    useState(defaultOrderStatus);

  const [updateComplaintsStatus, { isLoading }] =
    useUpdateComplaintsStatusMutation();

  // Function to handle status update
  const handleUpdateStatus = async () => {
    const fullData = {
      status: selectedOrderStatus,
    };

    console.log(fullData);

    const result = await updateComplaintsStatus({ fullData, token, id });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      navigate("/complaints");
    }
  };

  return (
    <div className="space-y-2">
      <InputFilter
        defaultValue={defaultOrderStatus}
        placeholder="Select Order Status"
        isDisabled={isEdit}
        label="Order Status"
        Filter={orderStatus}
        onChange={setSelectedOrderStatus} // Update selected order status
      />

      <Button
        loading={isLoading}
        disabled={isEdit}
        primary
        onClick={handleUpdateStatus}
      >
        Submit
      </Button>
    </div>
  );
};

export default ComplaintOrderStatus;

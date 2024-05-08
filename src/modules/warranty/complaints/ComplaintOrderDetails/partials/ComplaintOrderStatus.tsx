import React, { useState } from "react";
import Button from "../../../../../common/components/Button";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import { orderStatus } from "../config/constants";
import { ComplaintsOrderStatusProps } from "../config/types";
import { useUpdateComplaintsStatusMutation } from "../../../../../redux/features/api/complaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { showSwal } from "../../../../../shared/helpers/SwalShower";

const ComplaintOrderStatus: React.FC<ComplaintsOrderStatusProps> = ({
  isEdit = true,
  defaultOrderStatus = "",
  id = "",
}) => {
  const token = getFromLocalStorage(authKey);
  // State variables to store the selected order and repair statuses
  const [selectedOrderStatus, setSelectedOrderStatus] =
    useState(defaultOrderStatus);

  const [updateComplaintsStatus] = useUpdateComplaintsStatusMutation();

  // Function to handle status update
  const handleUpdateStatus = async () => {
    const fullData = {
      repair_status: selectedOrderStatus,
    };

    const result = await updateComplaintsStatus({ fullData, token, id });
    showSwal(result);
    console.log("fullData:", fullData);
  };

  return (
    <div className="space-y-2">
      <InputFilter
        defaultValue={defaultOrderStatus}
        isDisabled={isEdit}
        label="Order Status"
        Filter={orderStatus}
        onChange={setSelectedOrderStatus} // Update selected order status
      />

      <Button disabled={isEdit} primary onClick={handleUpdateStatus}>
        Submit
      </Button>
    </div>
  );
};

export default ComplaintOrderStatus;

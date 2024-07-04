import React, { useState } from "react";

import { orderStatus } from "../config/constants";
import { ComplaintsOrderStatusProps } from "../config/types";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import Button from "../../../../common/components/Button";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateComplaintsStatusMutation } from "../../../../redux/features/api/complaints";
import { showSwal } from "../../../../shared/helpers/SwalShower";

const ComplaintOrderStatus: React.FC<ComplaintsOrderStatusProps> = ({
  isEdit = true,
  defaultOrderStatus = "",
  // defaultRepairStatus = "",
}) => {
  const { id } = useParams();
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
    console.log(result);
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      navigate("/complaints-service");
    }
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
      {/* <InputFilter
        isDisabled={isEdit}
        defaultValue={defaultRepairStatus}
        label="Repair Status"
        Filter={orderStatus}
        onChange={setSelectedRepairStatus} // Update selected repair status
      /> */}

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

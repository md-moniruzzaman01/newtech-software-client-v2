import React, { useState } from "react";

import { orderStatus } from "../config/constants";
import { ComplaintsOrderStatusProps } from "../config/types";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import Button from "../../../../common/components/Button";
import Input from "../../../../common/components/Input";

const ComplaintOrderStatus: React.FC<ComplaintsOrderStatusProps> = ({
  isEdit = true,
  branch = "",
  defaultOrderStatus = "",
  defaultRepairStatus = "",
}) => {
  // State variables to store the selected order and repair statuses
  const [selectedBranch, setSelectedBranch] = useState(branch);
  const [selectedOrderStatus, setSelectedOrderStatus] =
    useState(defaultOrderStatus);
  const [selectedRepairStatus, setSelectedRepairStatus] =
    useState(defaultRepairStatus);

  // Function to handle status update
  const handleUpdateStatus = () => {
    // You can perform actions here to update the order and repair statuses
    // For example, make API calls to update the statuses in the backend

    // For demonstration, let's just log the selected statuses
    console.log("Selected Order Status:", selectedOrderStatus);
    console.log("Selected Repair Status:", selectedRepairStatus);
    console.log("Selected Branch:", selectedBranch);
  };

  return (
    <div className="space-y-2">
      <Input
        defaultValue={branch}
        onChange={(e) => setSelectedBranch(e.target.value)}
        IsDisabled={isEdit}
        labelName="Branch"
      />

      <InputFilter
        defaultValue={defaultOrderStatus}
        isDisabled={isEdit}
        label="Order Status"
        Filter={orderStatus}
        onChange={setSelectedOrderStatus} // Update selected order status
      />
      <InputFilter
        isDisabled={isEdit}
        defaultValue={defaultRepairStatus}
        label="Repair Status"
        Filter={orderStatus}
        onChange={setSelectedRepairStatus} // Update selected repair status
      />

      <Button disabled={isEdit} primary onClick={handleUpdateStatus}>
        Submit
      </Button>
    </div>
  );
};

export default ComplaintOrderStatus;

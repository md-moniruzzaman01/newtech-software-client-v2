import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "../../../../../common/components/Button";
import { useState } from "react";
import Modal from "../../../../../common/components/Modal/Modal";
import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import { headerForRepair, tableLayoutForRepair } from "../config/constants";

const RepairDetails = ({ repairItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white min-w-60 shadow-lg  rounded-lg p-5 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faWrench} className="mr-2 text-blue-500" />
          Repair Items
        </h2>
        <p className="text-blue-500 text-4xl font-semibold text-center py-4">
          15+
        </p>
      </div>
      {/* <Button
        small
        className="self-end mt-3"
        onClick={() => setIsOpen(true)} // Open modal for all items
      >
        View Details
      </Button> */}
      <Modal
        size="max-7xl"
        header={"Repair Details"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <CommonTable
          headerData={headerForRepair}
          dataLayout={tableLayoutForRepair}
          itemData={repairItems}
        />
      </Modal>
    </div>
  );
};

export default RepairDetails;

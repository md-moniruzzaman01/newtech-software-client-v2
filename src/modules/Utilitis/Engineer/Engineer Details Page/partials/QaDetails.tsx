import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import Button from "../../../../../common/components/Button";
import { useState } from "react";
import Modal from "../../../../../common/components/Modal/Modal";
import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import { headerForQa, tableLayoutForQa } from "../config/constants";

const QaDetails = ({ qaItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white min-w-60 shadow-lg  rounded-lg p-5 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mr-2 text-green-500"
          />
          QA Items
        </h2>
        <p className="text-4xl font-semibold text-center py-4 text-green-500">
          12+
        </p>
      </div>
      {/* <Button onClick={() => setIsOpen(true)} small className="self-end mt-3">
        View Details
      </Button> */}
      <Modal
        size="max-7xl"
        header={"Qa Details"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <CommonTable
          headerData={headerForQa}
          dataLayout={tableLayoutForQa}
          itemData={qaItems}
        />
      </Modal>
    </div>
  );
};

export default QaDetails;

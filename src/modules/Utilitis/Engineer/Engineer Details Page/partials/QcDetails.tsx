import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
// import Button from "../../../../../common/components/Button";
import { useState } from "react";
import Modal from "../../../../../common/components/Modal/Modal";
import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import { headerForQc, tableLayoutForQc } from "../config/constants";

const QcDetails = ({ qcItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white min-w-60 shadow-lg rounded-lg  p-5 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon
            icon={faClipboardCheck}
            className="mr-2 text-yellow-500"
          />
          QC Items
        </h2>
        <p className="text-4xl font-semibold text-center py-4 text-yellow-500">
          35+
        </p>
      </div>
      {/* <Button small onClick={() => setIsOpen(true)} className="self-end mt-3">
        View Details
      </Button> */}
      <Modal
        size="max-7xl"
        header={"Qc Details"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <CommonTable
          headerData={headerForQc}
          dataLayout={tableLayoutForQc}
          itemData={qcItems}
        />
      </Modal>
    </div>
  );
};

export default QcDetails;

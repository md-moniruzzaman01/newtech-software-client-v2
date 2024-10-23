import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import Button from "../../../../../common/components/Button";
import { useState } from "react";
import Modal from "../../../../../common/components/Modal/Modal";
import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import { headerForQa, tableLayoutForQa } from "../config/constants";

const QaDetails = ({ qaItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(qaItems);
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
        <p>
          <strong>Total: </strong>{" "}
          <span className="text-green-500">{qaItems.length}</span>
        </p>
        <p>
          <strong>QA OK Count: </strong>
          <span className="text-green-500">
            {qaItems.filter((item) => item.status === "QA Ok").length}
          </span>
        </p>
        <p>
          <strong>Warranty Count: </strong>
          <span className="text-green-500">
            {qaItems.filter((item) => item.warranty).length}
          </span>
        </p>
        <p>
          <strong>Non Warranty Count: </strong>{" "}
          <span className="text-green-500">
            {qaItems.filter((item) => !item.warranty).length}
          </span>
        </p>
        <p>
          <strong>Latest QA: </strong>{" "}
          <span className="text-green-500">
            {qaItems[0]?.serial_number || "N/A"}
          </span>
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

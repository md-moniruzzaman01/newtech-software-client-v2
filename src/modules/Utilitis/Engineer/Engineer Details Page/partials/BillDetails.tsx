import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
// import Button from "../../../../../common/components/Button";
import { useState } from "react";
import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import Modal from "../../../../../common/components/Modal/Modal";
import { headerForBill, tableLayoutForBill } from "../config/constants";

const BillDetails = ({ billItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white min-w-60 min-h-[156px] shadow-lg  rounded-lg p-5 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl  font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faFileInvoice} className="mr-2 text-red-500" />
          Bill Items
        </h2>
        <p>
          <strong>Total:</strong>{" "}
          <span className="text-red-500">{billItems.length}</span>
        </p>
        <p>
          <strong>Total Amount:</strong>{" "}
          <span className="text-red-500">
            {billItems.reduce((sum, item) => sum + item.total_amount, 0)} BDT
          </span>
        </p>
      </div>
      {/* <Button small onClick={() => setIsOpen(true)} className="self-end mt-9">
        View Details
      </Button> */}
      <Modal
        size="max-7xl"
        header={"Bill Details"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <CommonTable
          headerData={headerForBill}
          dataLayout={tableLayoutForBill}
          itemData={billItems}
        />
      </Modal>
    </div>
  );
};

export default BillDetails;

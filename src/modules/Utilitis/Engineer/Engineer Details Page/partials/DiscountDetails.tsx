import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
// import Button from "../../../../../common/components/Button";
import Modal from "../../../../../common/components/Modal/Modal";
import { useState } from "react";
import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import { headerForDiscount, tableLayoutForDiscount } from "../config/constants";

const DiscountDetails = ({ discountItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white min-w-60 min-h-[156px] shadow-lg  rounded-lg p-5 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faTags} className="mr-2 text-purple-500" />
          Discount Items
        </h2>
        <p>
          <strong>Total:</strong>{" "}
          <span className="text-purple-500">{discountItems.length}</span>
        </p>
        <p>
          <strong>Total Discount:</strong>{" "}
          <span className="text-purple-500">
            {discountItems.reduce((sum, item) => sum + item.amount, 0)} BDT
          </span>
        </p>
      </div>
      {/* <Button small onClick={() => setIsOpen(true)} className="self-end mt-9">
        View Details
      </Button> */}
      <Modal
        size="max-7xl"
        header={"Discount Details"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <CommonTable
          headerData={headerForDiscount}
          dataLayout={tableLayoutForDiscount}
          itemData={discountItems}
        />
      </Modal>
    </div>
  );
};

export default DiscountDetails;

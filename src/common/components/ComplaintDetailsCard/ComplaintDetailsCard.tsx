import { FC, useState } from "react";
import { complaintDetailsCardProps } from "../../../shared/config/types";
import { NavLink } from "react-router-dom";
import { icons } from "../../../shared/libs/Icons";
import { emptyData } from "../../../shared/config/constaints";
import Modal from "../Modal/Modal";

const ComplaintDetailsCard: FC<complaintDetailsCardProps> = ({
  headerTitle = "Complaints Details",
  CardInformation,
  className = "",
  link,
  modalHeader = "",
  modalData = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const Styles = `bg-solidWhite px-5 space-y-5 py-5 rounded-sm ${
    modalData?.length > 0 ? "cursor-pointer" : ""
  } ${className}`;
  return (
    <div className={Styles} onClick={() => setIsOpen(true)}>
      <div className="flex justify-between ">
        <h1 className="text-xl font-semibold">{headerTitle} </h1>
        {link && (
          <NavLink className="text-black" to={link}>
            {icons?.link}
          </NavLink>
        )}
      </div>
      {CardInformation &&
        CardInformation?.map((item, index) => (
          <div key={index} className="flex justify-between ">
            <div className="font-medium space-y-2">
              <h4>{item.title}:</h4>
            </div>
            <div className="space-y-2">
              <p> {item.value || emptyData}</p>
            </div>
          </div>
        ))}
      {modalData?.length > 0 && (
        <Modal header={modalHeader} isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="space-y-2">
            {modalData?.map((item, index) => (
              <div key={index}>
                <p>
                  <b>{item?.title}</b>: {item?.value}
                </p>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ComplaintDetailsCard;

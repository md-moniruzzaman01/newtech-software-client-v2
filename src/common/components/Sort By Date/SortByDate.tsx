import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal/Modal";

const SortByDate = ({ setStartDate, startDate, setEndDate }) => {
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    if (firstDate) {
      setStartDate(firstDate);
    }
    if (lastDate) {
      setEndDate(lastDate);
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    setFirstDate("");
    setLastDate("");
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => setIsOpen(true)} small>
        Sort By Date
      </Button>

      {/* Modal */}
      <Modal header={"Sort By Date"} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="space-y-5">
          <Input
            labelName="Start Date"
            onChange={(e) => setFirstDate(e.target.value)}
            className="max-h-7"
            inputType="date"
          />
          <Input
            labelName="End Date"
            onChange={(e) => setLastDate(e.target.value)}
            className="max-h-7"
            inputType="date"
          />
          <Button onClick={handleFilter}>Filter</Button>
        </div>
      </Modal>
      <Button disabled={!startDate} onClick={handleClear} small>
        All
      </Button>
    </div>
  );
};

export default SortByDate;

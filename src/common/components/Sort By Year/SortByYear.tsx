import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal/Modal";

const SortByYear = ({ setYear, year }) => {
  const [isYear, setIsYear] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    if (isYear) {
      setYear(isYear);
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    setYear("");
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => setIsOpen(true)} small>
        Sort By Year
      </Button>

      {/* Modal */}
      <Modal header={"Sort By Year"} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="space-y-5">
          <Input
            labelName="Year"
            onChange={(e) => setIsYear(e.target.value)}
            className="max-h-7"
            inputType="number"
            inputPlaceholder="e.g., 2020"
            minValue="1900"
            maxValue={new Date().getFullYear()}
          />

          <Button onClick={handleFilter}>Filter</Button>
        </div>
      </Modal>
      <Button disabled={!year} onClick={handleClear} small>
        All
      </Button>
    </div>
  );
};

export default SortByYear;

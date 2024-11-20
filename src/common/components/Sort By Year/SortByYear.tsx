import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal/Modal";

const SortByYear = ({ setYear, year }) => {
  const [isYear, setIsYear] = useState(year || "");
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    const currentYear = new Date().getFullYear();
    if (isYear && isYear >= 1900 && isYear <= currentYear) {
      setYear(isYear);
      setIsOpen(false);
    } else {
      alert("Please enter a valid year between 1900 and the current year.");
    }
  };

  const handleClear = () => {
    setYear("");
    setIsYear(""); // Clear local state
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
            defaultValue={isYear}
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

import { NavLink } from "react-router-dom";
import Button from "../../../../common/components/Button";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import { branches } from "../../../../shared/config/constaints";

const BranchHeader = ({ setSelectedBranch, defaultValue }) => {
  const handleBranchChange = (selectedBranch) => {
    setSelectedBranch(selectedBranch);
  };
  return (
    <div className="flex justify-between items-center mt-8 pb-5">
      <h1 className="text-2xl font-semibold">Branch</h1>
      <div className=" flex items-center justify-center gap-5">
        <NavLink to={"/Add-brand"}>
          <Button icon="+" className="rounded-full bg-btn_secondary ">
            + Add Branch
          </Button>
        </NavLink>
        <div>
          <InputFilter
            defaultValue={defaultValue}
            Filter={branches}
            onChange={handleBranchChange}
            inputName="branch"
          />
        </div>
      </div>
    </div>
  );
};

export default BranchHeader;

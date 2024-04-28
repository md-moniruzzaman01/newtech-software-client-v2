import { NavLink } from "react-router-dom";
import Button from "../../../../common/components/Button";
import { branches } from "../../../../shared/config/constaints";
import EngineersFilter from "../../../../common/components/EngineersFilter/EngineersFilter";

const BranchHeader = () => {
  return (
    <div className="flex justify-between items-center mt-8 pb-5">
      <h1 className="text-2xl font-semibold">Branch</h1>
      <div className="w-1/4 flex items-center justify-center gap-5">
        <NavLink to={"/Add-brand"}>
          <Button icon="+" className="rounded-full bg-btn_secondary ">
            + Add Branch
          </Button>
        </NavLink>
        <div className="w-1/3">
          <EngineersFilter placeholder="Select a Branch" Filter={branches} />
        </div>
      </div>
    </div>
  );
};

export default BranchHeader;

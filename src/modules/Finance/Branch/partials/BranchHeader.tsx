import Button from "../../../../common/components/Button";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import { FilterOptions } from "../../../../shared/config/constaints";

const BranchHeader = () => {
  return (
    <div className="flex justify-between items-center mt-8 pb-5">
      <h1 className="text-2xl font-semibold">Branch</h1>
      <div className="flex items-center justify-center gap-5">
        <Button
          icon="+"
          className="rounded-full bg-btn_secondary hover:bg-[#6e83ed]"
        >
          {"+ Add Branch"}
        </Button>
        <InputFilter Filter={FilterOptions}></InputFilter>
      </div>
    </div>
  );
};

export default BranchHeader;

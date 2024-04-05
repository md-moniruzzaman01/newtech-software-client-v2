import { NavLink } from "react-router-dom";
import Button from "../../../../common/components/Button";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";

const BranchHeader = () => {
  const { data: brands } = useGetBrandsQuery({});
  return (
    <div className="flex justify-between items-center mt-8 pb-5">
      <h1 className="text-2xl font-semibold">Branch</h1>
      <div className="w-1/4 flex items-center justify-center gap-5">
        <NavLink to={"/Add-brand"}>
          <Button
            icon="+"
            className="rounded-full bg-btn_secondary hover:bg-[#6e83ed]"
          >
            + Add Branch
          </Button>
        </NavLink>
        <div className="w-1/2">
          <InputFilter
            placeholder="Select a Brand"
            Filter={brands?.data}
          ></InputFilter>
        </div>
      </div>
    </div>
  );
};

export default BranchHeader;

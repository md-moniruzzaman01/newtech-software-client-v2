import React from "react";
import { useLocation } from "react-router-dom";
import InputFilter from "../InputFilter/InputFilter";
import { FilterOptions } from "../../../shared/config/constaints";

interface BranchHeaderProps {
  name?: string;
}
const BranchHeader: React.FC<BranchHeaderProps> = ({ name = "Hello" }) => {
  const location = useLocation();
  return (
    <div>
      <div className="flex justify-between items-center  px-[50px] pt-[36px]">
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          {location?.pathname === "/branch" && (
            <div>
              <button className="btn bg-[#253275] text-white text-lg rounded-full px-6">
                <span className="pr-2">+</span>Add Branch
              </button>
            </div>
          )}
          <div className="w-[200px]">
            <InputFilter Filter={FilterOptions}></InputFilter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchHeader;

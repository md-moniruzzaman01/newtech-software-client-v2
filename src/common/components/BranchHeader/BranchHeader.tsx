import React from "react";

interface BranchHeaderProps {
  name?: string;
}
const BranchHeader: React.FC<BranchHeaderProps> = ({ name = "Hello" }) => {
  return (
    <div>
      <div className="flex justify-between items-center  px-[50px] pt-[36px]">
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div>
            <button className="btn bg-[#253275] text-white text-lg rounded-full px-6">
              <span className="pr-2">+</span>Add Branch
            </button>
          </div>
          <div className="w-[200px]">
            <select
              className="select select-bordered join-item w-full"
              defaultValue={""}
            >
              <option value="" disabled>
                All
              </option>
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchHeader;

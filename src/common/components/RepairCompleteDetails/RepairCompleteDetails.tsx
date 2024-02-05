interface BranchRepairCompleteDetailsProps {
  header?: string;
  branch1?: string;
  branch2?: string;
  branch3?: string;
  branch4?: string;
  branch5?: string;
  branchData1?: string;
  branchData2?: string;
  branchData3?: string;
  branchData4?: string;
  branchData5?: string;
}

const RepairCompleteDetails: React.FC<BranchRepairCompleteDetailsProps> = ({
  header,
  branch1,
  branch2,
  branch3,
  branch4,
  branch5,
  branchData1,
  branchData2,
  branchData3,
  branchData4,
  branchData5,
}) => {
  return (
    <div className="bg-[#FBFBFB] px-6 rounded-md">
      <div>
        <h1 className="text-lg font-semibold  py-4">
          {header} <hr className="w-44 border-1 border-black" />
        </h1>
        <div className="space-y-3 ">
          <div>
            <div className="flex justify-between">
              <h4>{branch1}</h4>
              <p className="font-bold">{branchData1}</p>
            </div>
            <hr className="mt-3" />
          </div>
          <div>
            <div className="flex justify-between ">
              <h4>{branch2}</h4>
              <p className="font-bold">{branchData2}</p>
            </div>
            <hr className="mt-3" />
          </div>
          <div>
            <div className="flex justify-between ">
              <h4>{branch3}</h4>
              <p className="font-bold">{branchData3}</p>
            </div>
            <hr className="mt-3" />
          </div>
          <div>
            <div className="flex justify-between ">
              <h4>{branch4}</h4>
              <p className="font-bold">{branchData4}</p>
            </div>
            <hr className="mt-3" />
          </div>
          <div>
            <div className="flex justify-between ">
              <h4>{branch5}</h4>
              <p className="font-bold">{branchData5}</p>
            </div>
            <hr className="my-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairCompleteDetails;

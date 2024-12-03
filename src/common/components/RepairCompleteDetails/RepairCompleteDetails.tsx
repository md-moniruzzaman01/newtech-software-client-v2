/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { emptyData } from "../../../shared/config/constaints";
import { getBranchName } from "../../../shared/helpers/getBranchName";
import Button from "../Button";

interface BranchRepairCompleteDetailsProps {
  header?: string;
  data?: any[];
  title?: string;
  info?: string;
  link?: string;
  linkBy?: string;
}

const RepairCompleteDetails: React.FC<BranchRepairCompleteDetailsProps> = ({
  header,
  data = [],
  title,
  info,
  link,
  linkBy = "item?.id",
}) => {
  return (
    <div className="bg-[#FBFBFB] px-6 rounded-md">
      <div>
        <h1 className="text-lg font-semibold  py-4">
          {header} <hr className="w-44 border-1 border-black" />
        </h1>
        <div className="space-y-3 ">
          {data?.length > 0 ? (
            data?.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h4>
                    {eval(title) === item?.branch
                      ? getBranchName(eval(title))
                      : eval(title)}
                  </h4>
                  {link ? (
                    <NavLink to={`${link}${eval(linkBy)}`}>
                      <Button link>{eval(info)}</Button>
                    </NavLink>
                  ) : (
                    <p className="font-bold">{eval(info)}</p>
                  )}
                </div>
                <hr className="my-3" />
              </div>
            ))
          ) : (
            <span className="flex justify-center items-center min-h-40 font-medium text-2xl">
              {emptyData}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepairCompleteDetails;

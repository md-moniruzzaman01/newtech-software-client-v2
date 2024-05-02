import { NavLink } from "react-router-dom";
import { cx } from "../../../shared/config/constaints";
import Button from "../Button";

interface BranchCardProps {
  bgColor?: string;
  headerTitle?: string;
  branchTitle?: string;
  details?: string;
  price?: string;
  color?: string;
  link?: string;
  count?: number;
}

const BranchCard: React.FC<BranchCardProps> = ({
  bgColor,
  headerTitle,
  branchTitle,
  details,
  price,
  color,
  link,
  count,
}) => {
  const CBC_CLASSES = cx(
    bgColor === "primary" && "bg-[#8FD3FE]",
    bgColor === "lightBlue" && "bg-[#BDD5E7]",
    bgColor === "lightYellow" && "bg-[#FFEFD5]",
    bgColor === "darkYellow" && "bg-[#FEF8D4]",
    bgColor === "lightCyan" && "bg-[#AEDCDA]",
    bgColor === "lightOlive" && "bg-[#CFC98D]"
  );

  const CTC_CLASSES = cx(
    color === "primary" && "text-primary",
    color === "yellow" && "text-yellow",
    color === "purple" && "text-purple"
  );

  return (
    <div className={cx("min-h-48  rounded-md ", CBC_CLASSES, CTC_CLASSES)}>
      <div className="flex flex-col gap-10 h-full  justify-between py-8">
        <div className="flex justify-between px-8">
          <div className="text-xl font-bold">{headerTitle}</div>
          <div>
            <NavLink to={`${link}`}>
              <Button btn_outline>view</Button>
            </NavLink>
          </div>
        </div>
        <div className="">
          <div className="space-y-2 flex justify-between items-center px-8">
            <h3 className=" font-semibold">{branchTitle}</h3>
            <p className="font-bold">{count}</p>
          </div>
          <div className="flex justify-between items-center px-8 space-y-2">
            <h3 className=" font-semibold">{details}</h3>
            <p className="font-bold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;

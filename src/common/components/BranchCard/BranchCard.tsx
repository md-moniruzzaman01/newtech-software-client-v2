import { cx } from "../../../shared/config/constaints";

interface BranchCardProps {
  bgColor?: string;
  headerTitle?: string;
  branchTitle?: string;
  details?: string;
  price?: string;
  color?: string;
}

const BranchCard: React.FC<BranchCardProps> = ({
  bgColor,
  headerTitle,
  branchTitle,
  details,
  price,
  color,
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
    <div className={cx("min-h-48 m-2 rounded-md ", CBC_CLASSES, CTC_CLASSES)}>
      <div className="flex flex-col gap-10 h-full pt-10 justify-center">
        <div className="flex justify-between px-8">
          <div className="text-xl font-bold">{headerTitle}</div>
          <div>
            <button className="btn btn-outline min-h-6 h-0 rounded-full">
              view
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center px-8">
          <div className="space-y-2">
            <h3 className=" font-semibold">{branchTitle}</h3>
            <h3 className=" font-semibold">{details}</h3>
          </div>
          <div>
            <p className="font-bold">$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;

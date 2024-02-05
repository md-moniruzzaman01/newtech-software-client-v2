import { cx } from "../../../shared/config/constaints";

interface RepairCompleteCardProps {
  bgColor?: string;
  headerTitle?: string;
  branchTitle?: string;
  details?: string;
  price?: string;
  color?: string;
}

const RepairCompleteCard: React.FC<RepairCompleteCardProps> = ({
  bgColor,
  headerTitle,
  branchTitle,
  color,
}) => {
  const CBC_CLASSES = cx(
    bgColor === "primary" && "bg-[#f0fad3b7]",
    bgColor === "lightBlue" && "bg-[#FFFFE6]",
    bgColor === "lightYellow" && "bg-[#FAE6FA]"
  );

  const CTC_CLASSES = cx(
    color === "primary" && "text-primary",
    color === "yellow" && "text-yellow",
    color === "purple" && "text-purple"
  );

  return (
    <div className={cx("min-h-48 m-2  rounded-md", CBC_CLASSES, CTC_CLASSES)}>
      <div className="flex flex-col gap-10 h-full justify-center">
        <div className=" px-8">
          <div className="text-xl font-bold">{headerTitle}</div>
        </div>
        <div className=" px-8">
          <div>
            <h3 className=" font-bold text-4xl">{branchTitle}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairCompleteCard;

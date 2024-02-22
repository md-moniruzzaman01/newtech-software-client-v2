import { cx } from "../../../shared/config/constaints";

interface RepairCompleteCardProps {
  bgColor?: string;
  headerTitle?: string;
  branchTitle?: string;
  color?: string;
  isWithdraw?: boolean;
  isProduct?: boolean;
}

const RepairCompleteCard: React.FC<RepairCompleteCardProps> = ({
  bgColor,
  headerTitle,
  branchTitle,
  color,
  isWithdraw = false,
  isProduct = false,
}) => {
  const CBC_CLASSES = cx(
    bgColor === "primary" && "bg-[#f0fad3b7]",
    bgColor === "lightBlue" && "bg-[#FFFFE6]",
    bgColor === "lightYellow" && "bg-[#FAE6FA]",
    bgColor === "lightSky" && "bg-[#97ECF1]",
    bgColor === "darkBlue" && "bg-[#9EA1D4]",
    bgColor === "darkYellow" && "bg-[#FEC868]",
    bgColor === "lightGreen" && "bg-[#69DCB5]",
    bgColor === "lightBlueGreen" && "bg-[#69DCD2]",
    bgColor === "lightBlueColor" && "bg-[#69ADDC]",
    bgColor === "shadeOfGreen" && "bg-[#89E077]",
    bgColor === "shadeOfBlue" && "bg-[#83C3FF]",
    bgColor === "shadeOfRed" && "bg-[#FF4136]"
  );

  const CTC_CLASSES = cx(
    color === "primary" && "text-primary",
    color === "yellow" && "text-yellow",
    color === "purple" && "text-purple"
  );

  return (
    <div
      className={cx(
        `${isWithdraw ? "min-h-32 pt-5" : "min-h-40"}  ${
          isProduct ? " mb-5 mr-2 min-h-40" : "min-h-40"
        }  rounded-md`,
        CBC_CLASSES,
        CTC_CLASSES
      )}
    >
      <div
        className={`flex flex-col  ${
          isProduct && "pt-5"
        }  h-full justify-center ${
          isWithdraw ? "px-14 gap-5 pb-5" : "px-8 gap-10"
        }`}
      >
        <div>
          <div className="text-xl font-bold">{headerTitle}</div>
        </div>
        <div>
          <div>
            <h3 className={` font-bold ${isWithdraw && "text-end"} text-3xl`}>
              {branchTitle}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairCompleteCard;

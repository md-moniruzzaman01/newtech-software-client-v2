import { cx } from "../../../shared/config/constaints";

interface ComplaintHeaderCardProps {
  bgColor?: string;
  headerTitle?: string;
  headerDetails?: string;
  color?: string;
}

const ComplaintHeaderCard: React.FC<ComplaintHeaderCardProps> = ({
  bgColor,
  headerTitle,
  headerDetails,
  color,
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
    <div className={cx(` rounded-md  min-h-48`, CBC_CLASSES, CTC_CLASSES)}>
      <div
        className={`flex flex-col pt-10  text-center  h-full justify-center  px-8 gap-10`}
      >
        <div>
          <div className="text-3xl font-bold">{headerTitle}</div>
        </div>
        <div>
          <div>
            <h3 className={` font-medium  text-xl`}>{headerDetails}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintHeaderCard;

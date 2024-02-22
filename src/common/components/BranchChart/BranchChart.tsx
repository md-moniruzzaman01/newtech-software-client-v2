import { FC } from "react";
import "./BranchChart.css";
import Button from "../Button";
interface SingleStatus {
  label: string;
  value: number;
  link?: string;
}
interface BranchChartProps {
  header?: string;
  status: SingleStatus[];
}

const BranchChart: FC<BranchChartProps> = ({
  header = "Order count",
  status = [{ label: "Recieved", value: 0 }],
}) => {
  return (
    <div className=" py-4">
      <div className=" bg-grayWhite rounded-md max-w-[600px]">
        <div>
          <div className="flex justify-between px-8 pt-5">
            <div className="text-xl font-bold  pb-2 pr-5">
              {header} <hr className="border-1 w-40 border-black" />
            </div>
            <div>
              <Button
                className="bg-transparent !text-black hover:!text-gray-400 outline rounded-full py-0 
            !px-3"
              >
                view
              </Button>
            </div>
          </div>
          {status &&
            status.map((item: SingleStatus, i: number) => (
              <div key={i} className="grid grid-cols-1 gap-4 py-4 ">
                <div className="flex px-8 justify-between items-center">
                  <h3 className="w-36 ">{item.label || "Recived"}</h3>
                  <progress
                    id="received"
                    className="h-2  w-56  flex-1"
                    value={item.value || 0}
                    max="100"
                  ></progress>
                  <p className="w-28 text-end">{item.value || 0}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BranchChart;

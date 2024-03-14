import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
  const [value, onChange] = useState<Value>(new Date());

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    // Check if the date is today's date
    if (view === "month" && date.getDate() === new Date().getDate()) {
      return "today";
    }
    return null;
  };

  return (
    <div className="h-full w-full">
      <Calendar
        className={
          "h-full min-w-full py-14 custom-calendar bg-solidWhite rounded-md"
        }
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default Calender;

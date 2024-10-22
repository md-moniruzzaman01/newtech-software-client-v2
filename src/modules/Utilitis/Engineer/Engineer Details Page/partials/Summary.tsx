import RepairDetails from "./RepairDetails";
import QaDetails from "./QaDetails";
import QcDetails from "./QcDetails";
import DiscountDetails from "./DiscountDetails";
import BillDetails from "./BillDetails";

const Summary = ({
  repairItems = [],
  qaItems = [],
  qcItems = [],
  billItems = [],
  discountItems = [],
}) => {
  return (
    <div className="  my-8">
      <main className="flex justify-between ">
        {/* Repair Items Card */}
        <RepairDetails repairItems={repairItems} />

        {/* QA Items Card */}
        <QaDetails qaItems={qaItems} />
        {/* QC Items Card */}
        <QcDetails qcItems={qcItems} />

        {/* Discount Items Card */}
        <DiscountDetails discountItems={discountItems} />
        {/* Bill Items Card */}
        <BillDetails billItems={billItems} />
      </main>
    </div>
  );
};

export default Summary;

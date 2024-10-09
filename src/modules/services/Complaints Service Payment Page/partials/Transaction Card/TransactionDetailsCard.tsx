import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import { header, tableLayout } from "./config/constants";

const TransactionDetailsCard = ({ transactionData }) => {
  return (
    <div className="bg-solidWhite shadow-md rounded-lg px-4 pt-14">
      <CommonTable
        dataLayout={tableLayout}
        headerData={header}
        itemData={transactionData}
      />
    </div>
  );
};

export default TransactionDetailsCard;

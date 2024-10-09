import { findBranch } from "../../../../../shared/helpers/findBranch";

const TransactionDetailsCard = ({ transactionData }) => {
  return (
    <div className="bg-solidWhite shadow-md rounded-lg p-4 mb-4">
      {transactionData?.length ? (
        <div className="space-y-4">
          {transactionData.map((transaction) => (
            <div
              key={transaction.id}
              className="border-b pb-4 last:border-b-0 flex justify-between"
            >
              <div>
                <p className="font-medium">
                  <strong>Transaction ID:</strong> {transaction.id}
                </p>
                <p className="font-medium">
                  <strong>Branch:</strong> {findBranch(transaction.branch)}
                </p>
                <p>
                  <strong>Type:</strong> {transaction.type}
                </p>
                <p>
                  <strong>Note:</strong> {transaction.note}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  <strong>Date:</strong> {transaction.createdAt?.slice(0, 10)}
                </p>
                <p className="font-medium">
                  <strong>Amount:</strong> {transaction.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionDetailsCard;

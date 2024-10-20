import React from "react";
import { getBranchName } from "../../../../shared/helpers/getBranchName";

const TransactionDetails = ({ transaction }) => {
  return (
    <div className="bg-solidWhite text-center space-y-5 py-5 overflow-x-auto">
      <h2 className=" font-bold mb-4">Transaction Details</h2>
      {transaction.length > 0 ? (
        transaction.map((trans, index) => (
          <div key={index}>
            <div className="space-y-5">
              <div>
                <span className="font-medium">Transaction ID:</span> {trans.id}
              </div>
              <div>
                <span className="font-medium">Branch:</span>{" "}
                {getBranchName(trans.branch)}
              </div>
              <div className="text-xs">
                <span className="font-medium">Note:</span>
                {trans.note || "N/A"}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No transaction details available</p>
      )}
    </div>
  );
};

export default TransactionDetails;

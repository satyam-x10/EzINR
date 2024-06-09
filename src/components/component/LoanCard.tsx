import React from "react";
import { Button } from "../ui/button";
const LoanCard = (loan) => {
  loan = loan.data;

  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 border rounded-lg p-2">
      <div className="grid gap-1">
        <p className="font-medium">{loan.info}</p>
        <p className="text-gray-500 dark:text-gray-400">
          Rs. {loan.amount} | {loan.repaymentTerm} | {loan.status}
        </p>
      </div>
      <Button size="sm" variant="outline">
        View
      </Button>
    </div>
  );
};

export default LoanCard;

// amount
// :
// 2
// createdAt
// :
// "2024-06-09T10:06:34.310Z"
// email
// :
// "satyamx10@gmail.com"
// info
// :
// "ffsdvsv"
// interestRate
// :
// 2
// latePaymentFee
// :
// 3
// repaymentTerm
// :
// "2024-06-28T00:00:00.000Z"
// status
// :
// "active"
// __v
// :
// 0
// _id
// :
// "66657eaa73b7546201ff0d3c"

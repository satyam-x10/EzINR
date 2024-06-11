import React from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";

const LoanCard = ({ data }:{data:any}) => {
  const loan = data;
  const { data: sessionData } = useSession();
  const email = sessionData?.user?.email;

  return (
    <div
      className={`grid grid-cols-[1fr_auto] items-center gap-4 border rounded-lg p-2 ${
        email === loan.email ? "border-yellow-700" : "border-slate-500"
      }`}
    >
      <div className="grid gap-1">
        <p className="font-medium">{loan.info}</p>
        <p className="text-gray-500 dark:text-gray-400">
          Rs. {loan.amount} | {loan.repaymentTerm.split("T")[0]} |
          {loan.interestRate}% | {loan.status}
        </p>
      </div>
      <Button
        onClick={() => {
          window.location.href = `/borrow/${loan._id}`;
        }}
        size="sm"
        variant="outline"
      >
        View
      </Button>
    </div>
  );
};

export default LoanCard;

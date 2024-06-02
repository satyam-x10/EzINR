import React from "react";
import Link from "next/link";

const LoanButton = () => {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg border cursor-pointer border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-black dark:border-gray-600">
      <div>
        <h3 className="text-xl font-bold">$20,000 Loan</h3>
        <p className="text-gray-500 dark:text-gray-400">
          8% interest rate, 48-month repayment
        </p>
      </div>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="#"
      >
        Apply
      </Link>
    </div>
  );
};

export default LoanButton;

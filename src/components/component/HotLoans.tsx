import React from "react";
import Link from "next/link";
import LoanButton from "./LoanButton";
const HotLoans = () => {
  return (
    <section className="w-full py-4 md:py-6 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Make ur Loan stand out by paying just a little.
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse through your personal loans and select the one u want to
              advertise.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
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
                Advertise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotLoans;

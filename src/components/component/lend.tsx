"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import LoanCard from "./LoanCard";
export function Lend() {
  const [Loans, setLoans] = useState([]);

  useEffect(() => {
    async function fetchLoanData() {
      const response = await fetch(`/api/loan?allLoans=${true}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const allLoans = await response.json();
      console.log(allLoans);

      setLoans(allLoans);
    }

    fetchLoanData();
  }, []);

  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-2 py-4">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Chose a Loan you want to approve
        </h1>
        <p className="text-black mb-8 bg-slate-500 p-2 rounded-lg">
          Choose any suitable loan from below, ensuring you have verified all
          details and read the rules thoroughly.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {Loans &&
            Loans?.loan?.map((loan) => <LoanCard key={loan._id} data={loan} />)}
        </div>
      </div>
    </div>
  );
}

export function Rules() {
  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-2 py-4">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold mb-4">Loan System Rules</h1>
        <p className="text-black mb-8 bg-slate-500 p-2 rounded-lg">
          Welcome to our loan system. Here you will find the key rules and
          guidelines that govern our lending practices. Please review these
          carefully to ensure you understand the terms and conditions of our
          loans.
        </p>
        <div className="bg-white shadow-md rounded-lg p-8">
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <div className="mr-4 text-blue-500 font-bold">1.</div>
              <div>
                <h3 className="font-semibold mb-2">Eligibility Criteria</h3>
                <p>
                  To be eligible for a loan, you must be at least 18 years old,
                  have a stable source of income, and meet our credit score
                  requirements.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 text-blue-500 font-bold">2.</div>
              <div>
                <h3 className="font-semibold mb-2">Loan Amounts</h3>
                <p>
                  The minimum loan amount is $1,000 and the maximum is $50,000.
                  The exact loan amount you qualify for will depend on your
                  financial situation and creditworthiness.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 text-blue-500 font-bold">3.</div>
              <div>
                <h3 className="font-semibold mb-2">Interest Rates</h3>
                <p>
                  Our interest rates range from 5% to 15% APR, depending on your
                  credit score and other factors. The interest rate will be
                  fixed for the duration of the loan.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 text-blue-500 font-bold">4.</div>
              <div>
                <h3 className="font-semibold mb-2">Repayment Terms</h3>
                <p>
                  Loans can be repaid over a period of 12 to 60 months. The
                  monthly payment amount will be determined based on the loan
                  amount, interest rate, and repayment term.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 text-blue-500 font-bold">5.</div>
              <div>
                <h3 className="font-semibold mb-2">Late Payments</h3>
                <p>
                  A late payment fee of $25 will be charged for any payment that
                  is more than 15 days past due. Repeated late payments may
                  result in additional fees or even loan default.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

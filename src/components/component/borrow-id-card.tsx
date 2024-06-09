import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BorrowIdCard(data) {
  
  const Data = data?.data?.loan[0];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personal Loan</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Loan Amount</div>
          <div className="text-lg font-medium">INR {Data?.amount}</div>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Interest Rate</div>
          <div className="text-lg font-medium">{Data?.interestRate}%</div>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Created At</div>
          <div className="text-lg font-medium">{new Date(Data?.createdAt).toLocaleDateString()}</div>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
          <div className="text-lg font-medium">{Data?.email}</div>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Info</div>
          <div className="text-lg font-medium">{Data?.info}</div>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Late Payment Fee</div>
          <div className="text-lg font-medium">INR {Data?.latePaymentFee}</div>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Repayment Term</div>
          <div className="text-lg font-medium">{new Date(Data?.repaymentTerm).toLocaleDateString()}</div>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
          <div className="text-lg font-medium">{Data?.status}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  );
}

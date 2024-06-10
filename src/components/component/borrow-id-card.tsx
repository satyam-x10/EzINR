import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSession } from "next-auth/react";

export function BorrowIdCard(data) {
  const session = useSession();
  const Data = data?.data?.loan[0];
  const [profile_status, setProfile_status] = useState(-1);



  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Personal Loan</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Loan Amount
            </div>
            <div className="text-lg font-medium">INR {Data?.amount}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Interest Rate
            </div>
            <div className="text-lg font-medium">{Data?.interestRate}%</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Created At
            </div>
            <div className="text-lg font-medium">
              {new Date(Data?.createdAt).toLocaleDateString()}
            </div>
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
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Late Payment Fee
            </div>
            <div className="text-lg font-medium">INR {Data?.latePaymentFee}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Repayment Term
            </div>
            <div className="text-lg font-medium">
              {new Date(Data?.repaymentTerm).toLocaleDateString()}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
            <div className="text-lg font-medium">{Data?.status}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Description
            </div>
            <div className="text-lg font-medium">{Data?.Description}</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="mx-2">we will verify profiles of both the parties. Then your contact details will be sent to the other party. </div>
          {session.data?.user?.email === Data?.email || !Data ? (
            <div className="p-2 rounded-lg bg-red-500">You can't grant your own loan. LOL</div>
          ) : (
            <Button>Interested in granting</Button>
          )}
        </CardFooter>
      </Card>
      <div className="p-2 bg-slate-600">
        {profile_status == -1 && <div>Profiles status not verified</div>}
        {profile_status == 0 && <div> verifying profiles status...</div>}
        {profile_status == 1 && <div>Status Verified</div>}
      </div>
    </div>
  );
}


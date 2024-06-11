"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import LoanCard from "./LoanCard";
export function Profile() {
  const session = useSession();
  const [Data, setData] = useState<any>(session.data?.user);
  const [Loans, setLoans] = useState<any>(null);
  const [sliceLoan, setSliceLoan] = useState(1);
  useEffect(() => {
    setData(session.data?.user);
    async function fetchUserData() {
      if (session.data?.user?.email) {
        const response = await fetch(
          `/api/user?email=${session.data?.user?.email}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData((prevData:any) => ({ ...prevData, ...data.user }));
      }
    }
    async function fetchLoanData() {
      if (session.data?.user?.email) {
        const response = await fetch(
          `/api/loan?email=${session.data?.user?.email}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const loans = await response.json();
        setLoans(loans);
      }
    }

    fetchUserData();
    fetchLoanData();
  }, [session]);

  return (
    <div className="w-full mx-auto py-8 px-4 md:px-6">
      <div className="grid md:grid-cols-[200px_1fr] gap-8">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage alt="User Avatar" src={Data?.image||""} />
          </Avatar>
          <div className="text-center">
            <h2 className="text-xl font-semibold">{Data?.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">{Data?.email}</p>
          </div>

          <Button
            onClick={() => {
              window.location.href = "/verify";
            }}
          >
            Verify
          </Button>
          <div>
            {session.status === "authenticated" && (
              <Button
                onClick={() => {
                  signOut();
                }}
              >
                Signout
              </Button>
            )}
            {session.status != "authenticated" && (
              <Button
                onClick={() => {
                  signIn("google");
                }}
              >
                SignIn
              </Button>
            )}
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <span className="text-gray-500 dark:text-gray-400">
                  Address
                </span>
                <p>{Data?.address||""}</p>
              </div>
              <div className="grid gap-1">
                <span className="text-gray-500 dark:text-gray-400">Phone</span>
                <p>{Data?.phone}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Loan History</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold">Active Loans</h4>
                  <Link
                    className="text-gray-900 hover:underline dark:text-gray-50"
                    onClick={() => {
                      setSliceLoan(100);
                    }}
                    href="#"
                  >
                    View all
                  </Link>
                </div>
                <div className="grid gap-3">
                  {Loans &&
                    Loans.loan
                      .slice(0, sliceLoan)
                      .map((loan:any) => <LoanCard key={loan._id} data={loan} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
export function Profile() {
  const session = useSession();
  return (
    <div className="w-full mx-auto py-8 px-4 md:px-6">
      <div className="grid md:grid-cols-[200px_1fr] gap-8">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-xl font-semibold">Jared Palmer</h2>
            <p className="text-gray-500 dark:text-gray-400">
              jared@example.com
            </p>
          </div>

          <Button
            onClick={() => {
              window.location.href = "/verify";
            }}
          >
            Verify
          </Button>
          <div>
            {session.status==="authenticated" && <Button
              onClick={() => {
                signOut()
              }}
            >
              Signout
            </Button>}
            {session.status!="authenticated" && <Button
              onClick={() => {
                signIn('google')
              }}
            >
              SignIn
            </Button>}
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
                <p>123 Main St, Anytown USA</p>
              </div>
              <div className="grid gap-1">
                <span className="text-gray-500 dark:text-gray-400">Phone</span>
                <p>+1 (555) 555-5555</p>
              </div>
              <div className="grid gap-1">
                <span className="text-gray-500 dark:text-gray-400">Email</span>
                <p>jared@example.com</p>
              </div>
            </div>
            <div className="grid gap-1">
              <Button>Total Borrowed</Button>
            </div>
            <div className="grid gap-1">
              <Button>Total Borrowed</Button>
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
                    href="#"
                  >
                    View all
                  </Link>
                </div>
                <div className="grid gap-3">
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Home Improvement Loan</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        $15,000 | 24 months
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Auto Loan</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        $25,000 | 36 months
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold">Past Loans</h4>
                  <Link
                    className="text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    View all
                  </Link>
                </div>
                <div className="grid gap-3">
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Student Loan</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        $50,000 | 60 months
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Personal Loan</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        $10,000 | 12 months
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold">Loan Applications</h4>
                  <Link
                    className="text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    View all
                  </Link>
                </div>
                <div className="grid gap-3">
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Debt Consolidation Loan</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        $30,000 | 48 months
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Small Business Loan</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        $50,000 | 60 months
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button>Get More</Button>
        </div>
      </div>
    </div>
  );
}

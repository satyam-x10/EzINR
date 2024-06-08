"use client";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border">
      <Link className="flex items-center justify-center" href="/">
        <DollarSignIcon className="h-6 w-6" />
        <span className="sr-only"></span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/borrow"
        >
          Borrow
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/lend"
        >
          Lend
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/rules"
        >
          Rules
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/friends"
        >
          Friends
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/profile"
        >
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

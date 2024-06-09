"use client";
import React, { useState, useEffect } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export function BorrowCard() {
  const [Loan, setLoan] = useState({});
  const session = useSession();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [timespan, setTimespan] = useState("");
  const [remarks, setRemarks] = useState("");
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [durationDays, setDurationDays] = useState(0);
  const [lateCharge, setLateCharge] = useState(0);

  useEffect(() => {
    if (amount && interest && timespan) {
      const durationInDays =
        (new Date(timespan).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
      setDurationDays(Math.ceil(durationInDays)); // Rounding up to the nearest whole day
      setExpectedReturn(amount * (1 + interest / 100));
    }
  }, [amount, interest, timespan]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const loanData = {
      email: session.data?.user?.email, // Assuming this is the ID of the user creating the loan
      info: title,
      amount: amount,
      interestRate: interest,
      latePaymentFee: lateCharge,
      repaymentTerm: timespan,
      remarks: remarks,
      expectedReturn: expectedReturn,
      durationDays: durationDays,
    };

    try {
      const response = await fetch("/api/loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loanData),
      });

      if (!response.ok) {
        throw new Error("Failed to create loan");
      }

      const responseData = await response.json();
      console.log("Loan created:", responseData);

      // Optionally, you can reset the form fields after successful submission
      setTitle("");
      setAmount(0);
      setInterest(0);
      setLateCharge(0);
      setTimespan("");
      setRemarks("");
      setExpectedReturn(0);
      setDurationDays(0);
    } catch (error) {
      console.error("Error creating loan:", error);
      // Handle error here, such as displaying an error message to the user
    }

    window.location.href = "/";
  };

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <Card className="w-full">
      <Button className="float-right m-2 " onClick={handleClose}>
        CLOSE
      </Button>
      <CardHeader>
        <CardTitle>Apply for a Loan</CardTitle>
        <CardDescription>
          Get the financing you need to achieve your goals. Fill out the form
          below to apply for a loan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="title">Loan Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your Loan title (Private to you only)"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Loan Amount</Label>
            <Input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder="Enter loan amount in INR"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lateCharge">Late Charges</Label>
            <Input
              id="lateCharge"
              value={lateCharge}
              onChange={(e) => setLateCharge(parseFloat(e.target.value))}
              placeholder="Enter late charges in INR"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest">Interest</Label>
            <Input
              id="interest"
              value={interest}
              onChange={(e) => setInterest(parseFloat(e.target.value))}
              placeholder="Enter the margin interest you are willing to pay"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="timespan">Timespan</Label>
            <Input
              id="timespan"
              value={timespan}
              onChange={(e) => setTimespan(e.target.value)}
              placeholder="Select the date before you wish to return the Loan with interest"
              type="date"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Describe the remarks of the loan (Private to you only)"
            />
          </div>
          <div>
            <div className="px-2 float-end">
              Expected to return {expectedReturn.toFixed(2)} INR after{" "}
              {durationDays} days
            </div>
          </div>
          <Button className="w-full" type="submit">
            SUBMIT
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

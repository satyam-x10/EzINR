"use client";
import { BorrowIdCard } from "@/components/component/borrow-id-card";
import React, { useState } from "react";
import { useEffect } from "react";

const BorrowIdPage = ({ params }: { params: any }) => {
  const [loan, setLoan] = useState();
  useEffect(() => {
    async function fetchLoanData() {
      const response = await fetch(`/api/loan?loan_id=${params.id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const IDloan = await response.json();
      console.log(IDloan);
      setLoan(IDloan);
    }
    fetchLoanData();
  }, []);

  return <BorrowIdCard data={loan} />;
};

export default BorrowIdPage;

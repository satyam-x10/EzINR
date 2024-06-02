import { VerifyBar } from "@/components/component/verify-bar";
import React from "react";

const VerifyPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <VerifyBar />
      {children}
    </div>
  );
};

export default VerifyPage;

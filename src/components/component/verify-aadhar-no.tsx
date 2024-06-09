"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function VerifyAadharNo() {
  const [OtpSent, setOtpSent] = useState<boolean>(false);
  const [aadhar, setAadhar] = useState<number>();

  function sendOTP() {
    
  }
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12">
      {!OtpSent && (
        <form className="space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Verify your Aadhar number</h1>
            <p className="text-gray-500 dark:text-gray-400">
              We need to verify your aadhar number to complete your account
              setup.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Aadhar number</Label>
            <Input
              id="phone"
              placeholder="123 456 789 000"
              required
              type="number"
              value={aadhar}
            />
          </div>

          <Button className="w-full" type="submit" onClick={sendOTP}>
            Send OTP
          </Button>
        </form>
      )}

      {OtpSent && (
        <form>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Verify with OTP</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter the OTP sent to ur phone no
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="otp">Verification code</Label>
            <Input
              id="otp"
              placeholder="Enter the OTP"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}

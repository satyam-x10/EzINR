"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function VerifyPhoneNo() {
  const [OtpSent, setOtpSent] = useState<boolean>(false);
  const [Phone, setPhone] = useState<number>();

  function sendOTP() {}
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12">
      {!OtpSent && (
        <form className="space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Verify your phone number</h1>
            <p className="text-gray-500 dark:text-gray-400">
              We need to verify your phone number to complete your account
              setup.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              pattern='"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}"'
              placeholder="+1 (555) 555-5555"
              required
              type="tel"
              value={Phone}
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

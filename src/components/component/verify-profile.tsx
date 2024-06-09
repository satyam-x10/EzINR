"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function VerifyProfile() {
  const session = useSession();
  const [email, setEmail] = useState("email loading...");
  const [name, setName] = useState("name loading...");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");

  useEffect(() => {
    setName(session.data?.user?.name || "");
    setEmail(session.data?.user?.email || "");
  }, [session]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && email && phone && address && dob) {
      const data = {
        name,
        email,
        phone,
        address,
        dob,
      };
      try {
        const res = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          console.log("user updated.");
          window.location.href = "../verify/phone";
        } else {
          console.log("Failed to create user. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <main className="w-full max-w-[800px] px-4 py-12 mx-auto">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Verify Your Information</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please review and update your personal details below.
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <div className="border rounded-lg p-2" id="name">
              {name}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="border rounded-lg p-2" id="email">
              {email}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            placeholder="Enter your address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            placeholder="Enter your date of birth"
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <Button className="w-full sm:w-auto" type="submit">
          Confirm Information
        </Button>
      </form>
    </main>
  );
}

'use client'
import { HomePage } from "@/components/component/homepage";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const session = useSession();
  useEffect(() => {
    console.log(session);
    
  }, [session])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4">
      <HomePage />
    </main>
  );
}

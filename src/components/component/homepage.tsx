import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "./footer";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import Hero from "./Hero";
import HotLoans from "./HotLoans";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">      
      <main className="flex-1">
        <Hero />
        <HotLoans />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}

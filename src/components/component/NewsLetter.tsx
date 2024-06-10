'use client'
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const NewsLetter = () => {

  const session = useSession();
  const email = session.data?.user?.email;



  const handleSubmit = async (event) => {

  };

  return (
    <section className="w-full py-6 md:py-8 lg:py-12 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Don't miss your loans from EzINR
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We will inform you via email or Telegram once someone is interested in your loan request.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl space-y-2">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="p-1 underline">we will keep u posted on ur email {email}</div>
            <div className="p-2 rounded-lg bg-slate-700 items-center flex justify-evenly">U can also Send hi on telegram to be updated <Button >Send Hi</Button></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

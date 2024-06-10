'use client'
import React, { useState ,useEffect} from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const NewsLetter = () => {
  const [alertContact, setAlertContact]= useState();
  const [telegram, setTelegram] = useState<Number>();
  const session=useSession();
  const email= session.data?.user?.email;
  const getalertContact = async () => {
 
    const res = await fetch(
      `/api/alertContact?email=${email}`,
    );
    const data = await res.json();
    console.log(data);
    
    setAlertContact(data?.alertContacts?.telegram)
    
    // setAlertContact(res.data);
  };
  useEffect(() => {
    if(!email) return
    
    getalertContact();
      
  }, [email,session])
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/alertContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  telegram,email }),
    });

    if (res.ok) {
      // Handle successful response
      console.log('Success:', await res.json());
      getalertContact();
    } else {
      // Handle error response
      console.error('Error:', res.statusText);
    }
    window.location.reload();
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
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <Input
              className="max-w-lg flex-1"
              placeholder={
                alertContact
                  ? `${alertContact} is your current Telegram.`
                  : "Enter  Telegram phone"
              }              type="number"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
            
            <Button type="submit">Get Started</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

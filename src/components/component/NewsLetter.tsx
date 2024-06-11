'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

const NewsLetter = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;

  const [DbChatId, setDBChatId] = useState('');
  const [chatId, setChatId] = useState('');
  // const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        try {
          const res = await fetch(`/api/telegram?email=${email}`);
          const data = await res.json();
          setDBChatId(data.data.chatId);
          console.log(data.data.chatId);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) return;

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, chatId }),
      });

      const data = await response.json();
      window.location.href='https://t.me/EzINR_bot'
      if (data.success) {
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // window.location.reload();

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
          {DbChatId ? (
            <><div className="p-1 underline">
              We will keep you posted on your email {email}
            </div>
              <div className="p-2 rounded-lg bg-slate-700 text-white">
                You will currently be notified at telegram chatId {DbChatId}
              </div></>
          ) : (
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <div className="p-1 underline">
                We will keep you posted on your email {email}
              </div>
              <div className="flex gap-2">
                <Input
                  id="tele"
                  placeholder="Enter Tele Chat ID to be notified on Telegram"
                  required
                  type="text"
                  value={chatId}
                  onChange={(e) => setChatId(e.target.value)}
                />
                <Button type="submit">Subscribe</Button>
              </div>
                {/* <Button onClick={()=>{}}>Must send Hi from same Telegram account</Button> */}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

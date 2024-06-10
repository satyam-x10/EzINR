'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
const Notification = () => {
  const session = useSession();
  const email = session.data?.user?.email;
  const [notification, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`/api/notification?email=${email}`);
        if (!response.ok) {
          throw new Error(`Error fetching notifications: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.notifications);

        setNotifications(data.notifications);
      } catch (err) {
      }
    };

    if (email) {
      fetchNotifications();
    }
  }, [email]);
  return (
    <div>
      {notification?.notifications?.length && notification?.notifications?.map((message, index) => (
        <div key={index}><p className="text-black flex justify-between items-center bg-slate-500 p-2 rounded-lg m-2">
          <div>{message.split('.')[0]}</div>
          <div>
          <Button className='mx-2' onClick={() => {
            window.location.href = `/borrow/${(message.split('.')[1].replace(' ', ""))}`
          }} >Check Loan Details</Button>
          <Button>Proceed </Button>
          </div>
        </p>
        </div>
      ))}
    </div>

  )
}

export default Notification
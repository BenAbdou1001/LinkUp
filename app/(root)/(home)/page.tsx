'use client'
import React, { useEffect, useState } from 'react'
import Meeting from '../meeting/[id]/page';
import MeetingTypeList from '@/components/MeetingTypeList';


const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }));
    };

    updateDateTime(); // initial call
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex size-full flex-col gap-5 text-white'>
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">Upcoming Meeting at: 12:30 PM</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lh font-medium text-sky lg:text-2xl'>
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home

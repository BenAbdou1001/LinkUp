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
    <section className='flex size-full flex-col gap-8 text-white animate-fade-in'>
      <div className="relative h-[340px] w-full rounded-[24px] bg-hero bg-cover overflow-hidden group hover:shadow-2xl hover:shadow-blue/20 transition-all duration-500">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/30 via-purple/20 to-transparent" />
        
        <div className="relative flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 z-10">
          <h2 className="glassmorphism-enhanced max-w-[300px] rounded-xl py-3 px-4 text-center text-base font-semibold backdrop-blur-md border border-white/20 shadow-lg animate-slide-down">
            🎯 Upcoming Meeting at: 12:30 PM
          </h2>
          <div className='flex flex-col gap-3 animate-slide-up'>
            <h1 className='text-5xl font-extrabold lg:text-8xl tracking-tight bg-gradient-to-r from-white via-sky to-blue bg-clip-text text-transparent drop-shadow-2xl'>
              {time}
            </h1>
            <p className='text-lg font-semibold text-sky/90 lg:text-2xl tracking-wide'>
              {date}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="animate-fade-in-up delay-300">
        <MeetingTypeList />
      </div>
    </section>
  )
}

export default Home

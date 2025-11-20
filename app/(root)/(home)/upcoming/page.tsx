import CallList from '@/components/CallList'
import React from 'react'
import Image from 'next/image'

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white animate-fade-in'>
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue/20 to-sky/20 backdrop-blur-sm border border-white/10">
          <Image src="/icons/upcoming.svg" alt="upcoming" width={32} height={32} />
        </div>
        <div>
          <h1 className='text-3xl font-bold lg:text-4xl bg-gradient-to-r from-white to-blue bg-clip-text text-transparent'>
            Upcoming Meetings
          </h1>
          <p className="text-sm text-white/60 mt-1">View and manage your scheduled meetings</p>
        </div>
      </div>
      <CallList type='upcoming' />
    </section>
  )
}

export default Upcoming

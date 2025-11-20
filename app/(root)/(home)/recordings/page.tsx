import CallList from '@/components/CallList'
import React from 'react'
import Image from 'next/image'

const Recordings = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white animate-fade-in'>
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple/20 to-blue/20 backdrop-blur-sm border border-white/10">
          <Image src="/icons/recordings.svg" alt="recordings" width={32} height={32} />
        </div>
        <div>
          <h1 className='text-3xl font-bold lg:text-4xl bg-gradient-to-r from-white to-purple bg-clip-text text-transparent'>
            Recordings
          </h1>
          <p className="text-sm text-white/60 mt-1">Access and replay your meeting recordings</p>
        </div>
      </div>
      <CallList type='recordings' />
    </section>
  )
}

export default Recordings

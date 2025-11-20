import CallList from '@/components/CallList'
import React from 'react'
import Image from 'next/image'

const Previous = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white animate-fade-in'>
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-orange/20 to-yellow/20 backdrop-blur-sm border border-white/10">
          <Image src="/icons/previous.svg" alt="previous" width={32} height={32} />
        </div>
        <div>
          <h1 className='text-3xl font-bold lg:text-4xl bg-gradient-to-r from-white to-orange bg-clip-text text-transparent'>
            Previous Events
          </h1>
          <p className="text-sm text-white/60 mt-1">Review your past meetings and calls</p>
        </div>
      </div>
      <CallList type='ended' />
    </section>
  )
}

export default Previous

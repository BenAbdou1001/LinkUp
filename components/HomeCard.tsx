import Image from 'next/image'
import React from 'react'

interface HomeCardPropos {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick?: () => void;
}

const HomeCard = ({ className , img , title , description , handleClick } : HomeCardPropos) => {
  return (
        <div 
          className={`group relative px-6 py-7 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[270px] rounded-[20px] cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${className}`} 
          onClick={handleClick}
        >
            {/* Gradient border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] bg-gradient-to-br from-white/20 via-transparent to-transparent p-[2px]">
              <div className={`w-full h-full rounded-[18px] ${className}`} />
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className='flex-center glassmorphism-enhanced size-14 rounded-[14px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg border border-white/20'>
                  <Image src={img} alt={title} width={30} height={30} className="transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className='flex flex-col gap-2 transition-all duration-300 group-hover:translate-y-[-4px]'>
                  <h1 className='text-2xl font-bold tracking-tight'>{title}</h1>
                  <p className='text-base font-normal opacity-90'>{description}</p>
              </div>
            </div>
            
            {/* Decorative corner gradient */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
  )
}

export default HomeCard

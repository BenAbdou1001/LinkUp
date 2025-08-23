import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-sidenav-background px-6 py-4 lg:px-10'>
        <Image
          src="/icons/yoom-logo.png"
          width={180}
          height={180}
          alt="Yoom Logo"
        >
        </Image>
      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton afterSignOutUrl='/sign-in'/>
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar

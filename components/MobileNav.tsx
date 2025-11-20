'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constant'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="p-2 rounded-xl bg-gradient-to-br from-blue/10 to-purple/10 hover:from-blue/20 hover:to-purple/20 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 sm:hidden">
                        <Image
                            src="/icons/hamburger.svg"
                            width={28}
                            height={28}
                            alt="Menu Icon"
                            className='cursor-pointer'
                        />
                    </button>
                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-gradient-to-br from-sidenav-background via-background to-sidenav-background/80 backdrop-blur-xl'>
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-purple/5 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 pt-6">
                        <div className="px-4 mb-8 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 border border-white/10">
                                <Image
                                    src="/icons/logo.svg"
                                    width={32}
                                    height={32}
                                    alt="Yoom Logo"
                                />
                            </div>
                            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-sky bg-clip-text text-transparent">LinkUp</h2>
                        </div>

                        <div className='flex h-[calc(100vh-120px)] flex-col justify-between overflow-y-auto px-2'>
                            <SheetClose asChild>
                                <section className='flex flex-col gap-3 text-white'>
                                    {sidebarLinks.map((link) => {
                                        const isActive = link.route === '/' ? pathname === '/' : pathname.startsWith(link.route);
                                        return (
                                            <SheetClose asChild key={link.route}>
                                                <Link
                                                    href={link.route}
                                                    className={cn(
                                                        'group flex gap-4 items-center px-5 py-4 rounded-xl w-full transition-all duration-300',
                                                        isActive 
                                                            ? 'bg-gradient-to-r from-foreground to-foreground/80 shadow-lg shadow-blue/20' 
                                                            : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                                                    )}
                                                >
                                                    <div className={cn(
                                                        'p-2 rounded-lg transition-all duration-300',
                                                        isActive 
                                                            ? 'bg-white/10' 
                                                            : 'group-hover:bg-white/5'
                                                    )}>
                                                        <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                                                    </div>
                                                    <p className='font-semibold text-base group-hover:text-sky transition-colors duration-300'>{link.label}</p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })}
                                </section>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav

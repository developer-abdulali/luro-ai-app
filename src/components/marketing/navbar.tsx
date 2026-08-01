'use client'

import { cn } from '@/functions/cn'
import { useClerk } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import Wrapper from '../global/wrapper'
import { ArrowRightIcon, MenuIcon, ShipWheel, XIcon } from 'lucide-react'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '../ui/button'

const Navbar = () => {
    const { user } = useClerk()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <header className={cn('fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform transition-all duration-300 ease-out pointer-events-auto')}>
            <Wrapper className='backdrop-blur-lg rounded-full border border-neutral-800/80 px-2 md:px-4 flex items-center justify-between bg-black/60 shadow-lg'>
                <div className='flex items-center justify-between w-full py-2 inset-x-0'>
                    <div className='flex items-center flex-1 lg:flex-none pl-2'>
                        <Link href='/app' className='flex items-center gap-x-2'>
                            <ShipWheel className='w-auto h-5 text-white' />
                        </Link>
                        <div className='items-center hidden ml-4 lg:flex'>
                            <Menu />
                        </div>
                    </div>

                    <div className='flex items-center gap-2 lg:gap-3'>
                        {user ? (
                            <Button size="sm" asChild className='hidden sm:flex rounded-full bg-white text-black hover:bg-neutral-200 font-medium px-4'>
                                <Link href='/app'>Dashboard</Link>
                            </Button>
                        ) : (
                            <>
                                <Link
                                    href='/auth/signin'
                                    className='hidden sm:flex items-center justify-center h-9 px-4 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-colors'
                                >
                                    Login
                                </Link>
                                <Link
                                    href='/auth/signup'
                                    className='hidden sm:flex items-center justify-center h-9 px-4 text-sm font-medium text-black bg-white hover:bg-neutral-200 rounded-full transition-colors gap-1.5'
                                >
                                    Start for free
                                    <ArrowRightIcon className='w-3.5 h-3.5' />
                                </Link>
                            </>
                        )}

                        <Button size="icon" variant="ghost" onClick={() => setIsOpen((prev) => !prev)} className='lg:hidden p-2 w-8 h-8 text-white'>
                            {isOpen ? <XIcon className='w-4 h-4 duration-300' /> : <MenuIcon className='w-4 h-4 duration-300' />}
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Navbar
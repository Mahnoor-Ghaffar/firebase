import Link from 'next/link';
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import Image from 'next/image';
import logo from "@/../public/images/Home-images/Mask group.png"

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <main className='h-[12vh] bg-white'>
        <div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>

            {/* Logo Div */}
            <div className='flex items-center space-x-2'>
                <Image 
                src={logo} 
                alt='logo' 
                width={1000} 
                height={1000}
                className='w-[35px] h-[35px] sm:w-[50px] sm:h-[49px]' />
                <h1 className='text-[28px] text-[var(--font-color)] sm:text-[30px] font-semibold sm:text-35px'>
                Sugar Bliss
                </h1>
            </div>
            {/* Nav Links */}
            <ul className='hidden lg:flex items-center space-x-10 '>
              <li className='text-[20px] hover:text-[var(--font-color)] text-[var(--font-black)] hover:underline hover:underline-offset-8 duration-200'>
                <Link href="/">Home</Link>
              </li>

              <li className='text-[20px] hover:text-[var(--font-color)] text-[var(--font-black)] hover:underline hover:underline-offset-8'>
                <Link href="/about">About Us</Link>
              </li>

              <li className='text-[20px] hover:text-[var(--font-color)] text-[var(--font-black)] hover:underline hover:underline-offset-8'>
                <Link href="/menu">Menu</Link>
              </li>

              <li className='text-[20px] hover:text-[var(--font-color)] text-[var(--font-black)] hover:underline hover:underline-offset-8'>
                <Link href="/signup">Order</Link>
              </li>

              <li className='text-[20px] hover:text-[var(--font-color)] text-[var(--font-black)] hover:underline hover:underline-offset-8'>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>



              <HiBars3BottomRight onClick={openNav} className='lg:hidden w-[2rem] h-[2rem] text-black' />

        </div>
    </main>
  )
}

export default Nav;
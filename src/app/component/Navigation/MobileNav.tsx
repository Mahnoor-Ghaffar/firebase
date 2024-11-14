import Link from 'next/link';
import React from 'react'
import { ImCross } from 'react-icons/im';

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav,showNav}:Props) => {

  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <main className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
      <ImCross 
      onClick={closeNav}
      className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white hover:text-[var(--font-color)]' />

      {/* Nav Div */}
      <div className={`${navStyle} bg-[var(--font-color)] transition-all duration-500 delay-200 flex flex-col items-center
      justify-center w-[70%] h-[100%]`}>
        {/* Nav Links */}
        <ul className='space-y-10'>
              <li className='text-[35px] font-medium hover:text-black text-white'>
                <Link href="/" onClick={closeNav}>Home</Link>
              </li>

              <li className='text-[35px] font-medium hover:text-black text-white'>
                <Link href="/about" onClick={closeNav}>About Us</Link>
              </li>

              <li className='text-[35px] font-medium hover:text-black text-white'>
                <Link href="/menu" onClick={closeNav}>Menu</Link>
              </li>

              <li className='text-[35px] font-medium hover:text-black text-white'>
                <Link href="/Products" onClick={closeNav}>Products</Link>
              </li>

              <li className='text-[35px] font-medium hover:text-black text-white'>
                <Link href="#Footer" onClick={closeNav}>Contact</Link>
              </li>
            </ul>
      </div>
    </main>
  )
}

export default MobileNav;
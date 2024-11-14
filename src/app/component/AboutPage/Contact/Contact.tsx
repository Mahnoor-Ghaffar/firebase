import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className="bg-[url('/images/cardImg12.jpg')] bg-center bg-cover">
        <div className='justify-center w-full h-[280px] sm:h-[390px] flex flex-col items-center bg-[var(--img-over)]'>
         <h1 className='text-[25px] leading-none text-[var(--font-color)]
         font-bold text-center md:text-5xl sm:leading-tight mb-5'>
         Want To Know More About Us?
         </h1>

         {/* button */}
         <div className='flex justify-center mt-8  lg:justify-start'>
                        <button className='text-white text-2xl bg-[var(--font-color)] font-medium px-5 rounded-full 
                        py-4 text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
                        ease-in-out w-[160px] md:h-[70px] md:w-[270px]'>
                            <Link href="/">Contact Us</Link>
                        </button>
                    </div>
        </div>
    </section>
  )
}

export default Contact
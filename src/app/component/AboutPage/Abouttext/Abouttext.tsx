import React from 'react'

const Abouttext = () => {
  return (
    <section>
        <div className='justify-between w-full h-[280px] sm:h-[350px] flex flex-col items-center py-16'>
         <h1 className='text-[25px] leading-none text-[var(--font-color)]
         font-bold text-center sm:text-5xl sm:leading-tight mb-5'>
         About Us
         </h1>

         <p className='text-center text-[18px] sm:text-[26px] text-black 
         md:text-[30px] w-[75%]'>
         “ Lorem ipsum dolor sit amet consectetur. Tincidunt nec rhoncus morbi dictum ante. 
         Lacinia aliquam hendrerit. ”
        </p>
        </div>
    </section>
  )
}

export default Abouttext
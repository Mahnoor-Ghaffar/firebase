import Link from 'next/link';
import React from 'react';

const Top = () => {
    return (
        <section className="bg-[url('/images/cardImg12.jpg')] bg-center bg-cover">
            <div className="justify-center bg-[var(--img-over)] w-full h-[280px] sm:h-[390px] flex flex-col items-center">
         <h1 className='text-[25px] leading-none text-[var(--font-color)]
         font-bold text-center md:text-5xl sm:leading-tight mb-5'>
         Discover Our Online Products
         </h1>
        </div>
        </section>
    )
};

export default Top;
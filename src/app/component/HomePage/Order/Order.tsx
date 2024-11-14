import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Cake from '@/../public/images/Home-images/image3.png'


const Order = () => {
    return (
        <section className='py-5 bg-[var(--bg-pink)] w-[100%] flex flex-col min-h-[570px]'>
             <div className="container flex flex-wrap items-center mx-auto justify-center
              md:px-12 md:flex-row">  

                {/* text sec */}
                <div className='mb-14 lg:mb-0 lg:w-1/2 px-5 py-10 sm:px-10'>
                    <h1 className='max-w-xl text-[25px] leading-none text-[var(--font-color)]
                    font-extrabold text-center sm:text-5xl sm:text-left sm:leading-tight mb-5'>
                        Special Orders
                    </h1>
                    <p className='text-[16px] sm:text-[20px] max-w-xl text-center sm:text-left text-[var(--font-black)] lg-max-w-md'>
                    Lorem ipsum dolor sit amet consectetur. Dictum et at
                     posuere dolor lacus sed urna nisl. Fermentum et purus 
                     lectus nisi gravida morbi vitae condimentum ullamcorper. 
                     Justo diam duis in ullamcorper aliquam fringilla et sed semper. 
                     Sapien magna sodales nibh sapien viverra neque gravida risus.
                    </p>

                    {/* Button */}
                    <div className='flex justify-center mt-14  lg:justify-start'>
                        <button className='text-white bg-[var(--button-color)] font-medium px-5 rounded-full 
                        py-4 text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
                        ease-in-out w-[150px] sm:w-[210px]'>
                            <Link href="/">About Us</Link>
                        </button>
                    </div>
                </div>

                {/* image */}
                <div className='lg:w-1/2'>
                <Image src={Cake} alt='hero sec image' width={1000} height={1000} className="w-[335px] h-[330px]
                sm:w-[580px] sm:h-[510px]" />
                </div>

            </div>

        </section>
    )
};

export default Order;



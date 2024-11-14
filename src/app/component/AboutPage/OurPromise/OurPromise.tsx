import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import HeartCake from '@/../public/images/About-images/HeartCake.jpg'

const OurPromise = () => {
  return (
    <section className='py-5 bg-[var(--bg-pink)] w-[100%] flex flex-col min-h-[570px]'>
             <div className="container flex flex-wrap items-center mx-auto justify-center
              md:px-12 md:flex-row">  

              {/* image */}
              <div className='lg:w-1/2'>
                <Image src={HeartCake} alt='hero sec image' width={1000} height={1000} className="w-[335px] h-[330px]
                sm:w-[600px] sm:h-[450px] rounded-[60px]" />
                </div>

                {/* text sec */}
                <div className='mb-14 lg:mb-0 lg:w-1/2 px-5 py-10 sm:px-10'>
                    <h1 className='max-w-xl text-[25px] leading-none text-[var(--font-color)]
                    font-extrabold text-center sm:text-5xl sm:text-left sm:leading-tight mb-5'>
                        Our Mission
                    </h1>
                    <p className='text-[16px] sm:text-[20px] max-w-xl text-center sm:text-left text-[var(--font-black)] lg-max-w-md'>
                    Lorem ipsum dolor sit amet consectetur. Dictum et at
                     posuere dolor lacus sed urna nisl. Fermentum et purus 
                     lectus nisi gravida morbi vitae condimentum ullamcorper. 
                     Justo diam duis in ullamcorper aliquam fringilla et sed semper. 
                     Sapien magna sodales nibh sapien viverra neque gravida risus.
                    </p>

                </div>

            </div>

        </section>
  )
}

export default OurPromise;
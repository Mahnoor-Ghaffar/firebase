import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Facebook from '@/../public/images/Home-images/Facebook.png';
import Linkdin from '@/../public/images/Home-images/Linkedin.png';
import Insta from '@/../public/images/Home-images/Instagram.png';

const Footer = () => {
    return (
        <footer className='w-full h-[270px] flex items-center justify-center'>

            <div className='w-[80%] lg:w-[90%] h-full pb-[2rem] grid
            grid-cols-1 sm:grid-cols-2 items-center py-8 xl:gap-[30rem]'>

                {/* 1st part */}
                <div>
                <h2 className='text-[25px] sm:text-[30px] font-semibold md:text-[40px]'>
                         Visit Us
                     </h2>

                     <p className="mt-[1rem] text-black text-[20px] md:text-[25px]">
                     
                     abc@exapmle.com</p>
                   <p className='text-black text-[20px] mt-3 md:text-[25px]'>+(123) 2334 56789</p>
                </div>

                {/* 2nd part */}
                <div className='text-[25px] font-semibold flex h-[125px] items-end md:text-[25px]'>Follow Us

                    {/* icons */}
                    <Image src={Facebook} alt="facebook" height={1000} width={1000}
                    className='w-[30px] mx-3 md:w-[50px]' />
                    <Image src={Insta} alt="facebook" height={1000} width={1000}
                    className='w-[30px] mx-1 md:w-[50px]' />
                    <Image src={Linkdin} alt="facebook" height={1000} width={1000}
                    className='w-[30px] mx-3 md:w-[50px]' />
                </div>
            </div>
        </footer>
    )
}


export default Footer;
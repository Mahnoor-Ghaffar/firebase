import React from 'react'
import Image from 'next/image';
import aboutHeroImg from '@/../public/images/Products/cardImg14.jpg';

const  AboutHero = () => {
  return (
    <section className='w-[100%] h-[270px] sm:min-h-[600px] flex items-center justify-center'>
      <div className='w-[90%] h-[90%] rounded-[60px] overflow-hidden'>
      <Image src={aboutHeroImg} alt="Hero" width={100000} height={10000} className='w-full h-[1000px] relative bottom-96 rounded-[60px]' />
      </div>
    </section>
  )
};

export default AboutHero;
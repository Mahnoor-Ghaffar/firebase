"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
};


const TextSlider = () => {
    return (
        <section>
            <Carousel 
            additionalTransfrom={0} 
            arrows={true} 
            autoPlay={true} 
            autoPlaySpeed={4000}
            centerMode={false} 
            infinite 
            responsive={responsive} 
            itemClass="item" 
            showDots={true}>

                {/* 1st Slide */}
                <div className='justify-between w-full h-[280px] sm:h-[350px] flex flex-col items-center py-16'>

                    <h1 className='text-[25px] leading-none text-[var(--font-color)]
                    font-bold text-center sm:text-5xl sm:leading-tight mb-5'>
                        Our Customers Feedback
                    </h1>

                    <p className='text-center text-[18px] sm:text-[26px] text-black 
                    md:text-[30px] w-[75%]'>
                    “ Lorem ipsum dolor sit amet consectetur. Tincidunt nec rhoncus morbi dictum ante. 
                    Lacinia aliquam hendrerit. ”
                    </p>

                </div>

                {/* 1st Slide */}
                <div className='justify-between w-full h-[280px] sm:h-[350px] flex flex-col items-center py-16'>

                    <h1 className='text-[25px] leading-none text-[var(--font-color)]
                    font-bold text-center sm:text-5xl sm:leading-tight mb-5'>
                        Our Customers Feedback
                    </h1>

                    <p className='text-center text-[18px] sm:text-[26px] text-black 
                    md:text-[30px] w-[75%]'>
                    “ Lorem ipsum dolor sit amet consectetur. Tincidunt nec rhoncus morbi dictum ante. 
                    Lacinia aliquam hendrerit. ”
                    </p>

                </div>

                {/* 1st Slide */}
                <div className='justify-between w-full h-[280px] sm:h-[350px] flex flex-col items-center py-16'>

                    <h1 className='text-[25px] leading-none text-[var(--font-color)]
                    font-bold text-center sm:text-5xl sm:leading-tight mb-5'>
                        Our Customers Feedback
                    </h1>

                    <p className='text-center text-[18px] sm:text-[26px] text-black 
                    md:text-[30px] w-[75%]'>
                    “ Lorem ipsum dolor sit amet consectetur. Tincidunt nec rhoncus morbi dictum ante. 
                    Lacinia aliquam hendrerit. ”
                    </p>

                </div>

            </Carousel>
        </section>
    )
}

export default TextSlider;
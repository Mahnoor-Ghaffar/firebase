import React from 'react';
import Image from 'next/image';
import cardImage1 from '@/../public/images/Home-images/card-1.png'
import cardImage2 from '@/../public/images/Home-images/card-2.png'
import cardImage3 from '@/../public/images/Home-images/card-3.png'
import cardImage4 from '@/../public/images/Home-images/card-4.png'


const HomeCard = () =>{
    return (
        <section className='w-full'>


            {/* SVG wave */}
            <div className="w-full">
                <svg id="wave" style={{ transform: 'rotate(180deg)', transition: '0.3s' }} viewBox="0 0 1440 280" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="white" offset="0%" />
                            <stop stopColor="white" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient-0)" d="M0,140L10,144.7C20,149,40,159,60,158.7C80,159,100,149,120,126C140,103,160,65,180,56C200,47,220,65,
                    240,79.3C260,93,280,103,300,121.3C320,140,340,168,360,191.3C380,215,400,233,420,219.3C440,205,460,159,480,121.3C500,84,520,56,540,42C560,
                    28,580,28,600,28C620,28,640,28,660,56C680,84,700,140,720,168C740,196,760,196,780,172.7C800,149,820,103,840,93.3C860,84,880,112,900,135.3C920,
                    159,940,177,960,172.7C980,168,1000,140,1020,140C1040,140,1060,168,1080,154C1100,140,1120,84,1140,93.3C1160,103,1180,177,1200,182C1220,187,1240,
                    121,1260,107.3C1280,93,1300,131,1320,163.3C1340,196,1360,224,1380,214.7C1400,205,1420,159,1430,135.3L1440,112L1440,280L1430,280C1420,280,1400,
                    280,1380,280C1360,280,1340,280,1320,280C1300,280,1280,280,1260,280C1240,280,1220,280,1200,280C1180,280,1160,280,1140,280C1120,280,1100,280,1080,
                    280C1060,280,1040,280,1020,280C1000,280,980,280,960,280C940,280,920,280,900,280C880,280,860,280,840,280C820,280,800,280,780,280C760,280,740,280,
                    720,280C700,280,680,280,660,280C640,280,620,280,600,280C580,280,560,280,540,280C520,280,500,280,480,280C460,280,440,280,420,280C400,280,380,280,
                    360,280C340,280,320,280,300,280C280,280,260,280,240,280C220,280,200,280,180,280C160,280,140,280,120,280C100,280,80,280,60,280C40,280,20,280,10,
                    280L0,280Z">
                    </path>
                    </svg>
            </div>


            {/* Content */}
            <div className='w-full my-11'>

                {/* Heading */}
                <h2 className="heading text-[var(--font-black)]">
                Check Out Our 
                <span className="text-[var(--font-color)]"> Best Sellers</span>
                </h2>

                <div className='flex items-center justify-center'>

                    {/* Cards */}
                <div className="w-[95%] sm:w-[80%] lg:w-[95%] xl:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid
                 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.7rem] sm:gap-[3rem] justify-around">

                    {/* Card 1 */}

                    <div className="w-[150px] h-[200px] lg:w-[220px] lg:h-[280px] flex flex-col  justify-between">
                        {/* image */}
                        <Image src={cardImage1} alt='Moon Bread' width={1000} height={1000} className='
                        w-full h-[159px] lg:h-[80%]' />

                        {/* text */}
                        <div className='w-full text-1xl flex justify-center pt-4 text-[var(--font-color)]
                         text-[17px] font-bold'>
                         Lorem ipsum
                         </div>
                    </div>

                     {/* Card 2 */}

                    <div className="w-[150px] h-[200px] lg:w-[220px] lg:h-[280px] flex flex-col justify-between">
                        {/* image */}
                        <Image src={cardImage2} alt='Moon Bread' width={1000} height={1000} className='
                        w-full h-[159px] lg:h-[80%]' />

                        {/* text */}
                        <div className='w-full text-1xl flex justify-center pt-4 text-[var(--font-color)]
                         text-[17px] font-bold'>
                         Lorem ipsum
                         </div>
                    </div>

                    {/* Card 3 */}

                    <div className="w-[150px] h-[200px] lg:w-[220px] lg:h-[280px] flex flex-col justify-between">
                        {/* image */}
                        <Image src={cardImage3} alt='Moon Bread' width={1000} height={1000} className='
                        w-full h-[159px] lg:h-[80%]' />

                        {/* text */}
                        <div className='w-full text-1xl flex justify-center pt-4 text-[var(--font-color)]
                         text-[17px] font-bold'>
                         Lorem ipsum
                         </div>
                    </div>

                    {/* Card 4 */}

                    <div className="w-[150px] h-[200px] lg:w-[220px] lg:h-[280px] flex flex-col justify-between">
                        {/* image */}
                        <Image src={cardImage4} alt='Moon Bread' width={1000} height={1000} className='
                        w-full h-[159px] lg:h-[80%]' />

                        {/* text */}
                        <div className='w-full text-1xl flex justify-center pt-4 text-[var(--font-color)]
                         text-[17px] font-bold'>
                         Lorem ipsum
                         </div>
                    </div>
                    
                 </div>

                </div>

                
            </div>



        </section>
    )
}

export default HomeCard;
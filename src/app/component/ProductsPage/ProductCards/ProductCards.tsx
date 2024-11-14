import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from "@/../public/images/Products/cardImg1.jpg";
import image2 from "@/../public/images/Products/cardImg18.jpg";
import image3 from "@/../public/images/Products/cardImg16.jpg";
import image4 from "@/../public/images/Products/cardImg19.jpg";
import image5 from "@/../public/images/Products/cardImg5.jpg";
import image6 from "@/../public/images/Products/cardImg6.jpg";
import image7 from "@/../public/images/Products/cardImg7.jpg";
import image8 from "@/../public/images/Products/cardImg8.jpg";
import image9 from "@/../public/images/Products/cardImg9.jpg";
import image10 from "@/../public/images/Products/cardImg10.jpg";
import image11 from "@/../public/images/Products/cardImg11.jpg";
import image12 from "@/../public/images/Products/cardImg13.jpg";
import image13 from "@/../public/images/Products/cardImg14.jpg";
import image14 from "@/../public/images/Products/cardImg15.jpg";
import image15 from "@/../public/images/Products/cardImg4.jpg";
import image16 from "@/../public/images/Products/cardImg17.jpg";
import { FaStar } from 'react-icons/fa';





const ProductCards = () => {
  return (
    <section className='bg-[var(--pink-bg)]'>

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

{/* Cards main */}
<div className='w-full flex justify-center items-center'>
<div className='w-[full] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 md:my-20 gap-[2rem]'>

{/* Card 1 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image1}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 2 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image2}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 3 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image3}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1"><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 4 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image4}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
 </div>


{/* Cards main */}
<div className='w-full flex justify-center items-center'>
<div className='w-[full] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 md:mb-20 gap-[2rem]'>

{/* Card 1 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image5}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 2 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image6}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />

          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 3 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image7}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 4 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image8}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
</div>

{/* Cards main */}
<div className='w-full flex justify-center items-center'>
<div className='w-[full] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-[2rem]'>

{/* Card 1 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image9}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 2 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image10}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 3 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image11}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 4 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image12}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
</div>


{/* Cards main */}
<div className='w-full flex justify-center items-center'>
<div className='w-[full] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-[2rem]'>

{/* Card 1 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image13}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 2 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image14}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">new</div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 3 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image16}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>


    {/* Card 4 */}
<div className="bg-white w-[250px] h-[390px] md:w-[300px] md:h-[466px]  rounded-lg overflow-hidden">
    <div>
      <Link href="">
        <div className="w-full h-[80%] group overflow-hidden relative">
          <Image
            src={image15}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full h-[279px] md:h-[335px] object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-[var(--font-color)] group-hover:text-white duration-200">
              New Arrival
            </span>
        
        </div>
      </Link>
      <div className="border-[1px] border-slate-300 md:mt-5 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{}</p>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-[var(--font-color)] py-1 px-4 rounded-full text-xs">
            <p>30% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              $5
            </p>
            <p className="font-semibold">
              $3
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* add to cart button */}
          <button className="bg-[var(--font-color)] px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-700 hover:text-white duration-200">
            add to cart
          </button>
          {/* star icons */}
          <div className="flex items-center gap-x-1">
          <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
</div>

</section>
  )
}

export default ProductCards
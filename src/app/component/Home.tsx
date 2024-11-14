import React from 'react';
import Hero from './HomePage/Hero/Hero';
import HomeCard from './HomePage/HomeCards/HomeCard';
import Order from './HomePage/Order/Order';
import TextSlider from './HomePage/TextSlider/TextSlider';

const Home = () => {
  return (
    <main className='overflow-hidden'>
     <Hero />
     <HomeCard />
     <Order />
     <TextSlider />
    </main>
  )
}

export default Home;
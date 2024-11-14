import React from 'react';
import AboutHero from '@/app/component/AboutPage/AboutHero/AboutHero';
import Abouttext from '@/app/component/AboutPage/Abouttext/Abouttext';
import Contact from '@/app/component/AboutPage/Contact/Contact';
import OurMission from '@/app/component/AboutPage/OurMission/OurMission';
import OurPromise from '@/app/component/AboutPage/OurPromise/OurPromise';


const About = () => {
    return (
      <div className="overflow-hidden">
        <AboutHero />
        <Abouttext />
        <OurMission />
        <OurPromise />
        <Contact />
      </div>
    );
  };
  
  export default About;
  
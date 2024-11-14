'use client';
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
 const [showNav, setShowNav] = useState(false);
 const openNavHandler = () => setShowNav(true);
 const closeNavHandler = () => setShowNav(false);

  return (
    <main>
        <Nav openNav={openNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </main>
  )
}

export default ResponsiveNav;
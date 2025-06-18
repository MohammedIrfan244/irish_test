"use client"
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import CTA from './CTA'
import Language from './Language'
import {motion, useAnimation} from 'framer-motion'

function Navbar() {
  const [hidden,setHidden]=useState<boolean>(false)
  const [lastScroll,setLastScroll]=useState<number>(0)
  const controls = useAnimation()

useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScroll(currentScroll);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScroll]);

  useEffect(() => {
    controls.start({
      y: hidden ? '-100%' : '0%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    });
  }, [hidden, controls])
  return (
    <motion.div
    animate={controls}
     className='flex w-screen items-center fixed top-0 justify-between h-20 md:h-24 lg:h-28 z-[200] px-5 md:px-10 lg:px-20 bg-white'>
      <Logo/>
      <div className='flex md:flex md:flex-row items-center font-semibold gap-5 md:gap-10 lg:gap-15 flex-row-reverse md:text-xl h-full '>
      <Menu/>
      <CTA/>
      <Language/>
      </div>
    </motion.div>
  )
}

export default Navbar

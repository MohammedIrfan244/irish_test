"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { IoIosPlay } from "react-icons/io";

function Left() {
  return (
    <div className='w-full h-auto pt-40 md:pt-0 md:h-full flex items-center md:items-start ps-5 md:ps-10 lg:ps-20 justify-between md:justify-end flex-col gap-16 md:gap-10'>
      
      <motion.p 
        className='md:text-2xl text-xl font-bold text-orange-700'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        BEST DESTINATIONS AROUND THE WORLD
      </motion.p>
      
      <motion.div 
        className='text-5xl whitespace-nowrap lg:text-8xl font-serif font-semibold'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Travel, <span className='relative'>
          <Image
            className='absolute bottom-0 left-0 z-0'
            src="/images/underline.png"
            alt='Underline'
            width={250}
            height={30} 
          />
          <span className='relative z-10'>enjoy</span>
          </span></h2>
        <h2>and live a new</h2>
        <h2>and full life</h2>
      </motion.div>
      
      <motion.p 
        className='md-text-lg leading-relaxed lg:text-xl text-violet-900 font-semibold'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae veritatis, commodi repellat impedit repellendus! Eaque sapiente.
      </motion.p>
      
      <motion.div 
        className='flex items-center gap-15'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button 
          className='w-48 h-16 bg-yellow-500 text-lg hover:cursor-pointer font-semibold rounded-md text-white'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Find out more
        </motion.button>
        
        <div className='flex gap-5 items-center text-center text-xl font-semibold text-gray-500'>
          <motion.div 
            className='w-16 h-16 rounded-full flex justify-center bg-[#df6951] items-center'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IoIosPlay className='text-white text-2xl' />
          </motion.div>
          <p>Play Demo</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Left
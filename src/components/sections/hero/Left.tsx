"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { IoIosPlay } from "react-icons/io";

function Left() {
  return (
    <div className='w-full h-auto lg:min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-40 md:py-10 lg:py-0'>
      
      <motion.p 
        className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-orange-700 mb-4 sm:mb-6 md:mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        BEST DESTINATIONS AROUND THE WORLD
      </motion.p>
      
      <motion.div 
        className='mb-6 sm:mb-8 md:mb-10'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className='text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-[#181e4b] font-serif font-semibold leading-tight'>
          Travel, <span className='relative inline-block'>
            <Image
              className='absolute bottom-0 left-0 z-0 w-full h-auto'
              src="/images/underline.png"
              alt='Underline'
              width={250}
              height={30} 
            />
            <span className='relative z-10'>enjoy</span>
          </span>
        </h2>
        <h2 className='text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-[#181e4b] font-serif font-semibold leading-tight'>
          and live a new
        </h2>
        <h2 className='text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-[#181e4b] font-serif font-semibold leading-tight'>
          and full life
        </h2>
      </motion.div>
      
      <motion.p 
        className='text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#5e6282] font-medium mb-8 sm:mb-10 md:mb-12 max-w-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae veritatis, commodi repellat impedit repellendus! Eaque sapiente.
      </motion.p>
      
      <motion.div 
        className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button 
          className='w-full sm:w-auto px-8 py-4 bg-yellow-500 text-base sm:text-lg hover:cursor-pointer font-semibold rounded-md text-white min-w-[180px]'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Find out more
        </motion.button>
        
        <div className='flex gap-4 items-center text-center text-base sm:text-lg md:text-xl font-semibold text-gray-500'>
          <motion.div 
            className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex justify-center bg-[#df6951] items-center'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IoIosPlay className='text-white text-lg sm:text-xl md:text-2xl' />
          </motion.div>
          <p>Play Demo</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Left
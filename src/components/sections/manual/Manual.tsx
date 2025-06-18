'use client';
import React from 'react';
import Left from './Left';
import Right from './Right';
import { motion } from 'framer-motion';

function Manual() {
  return (
    <div className='flex flex-col lg:flex-row w-full pt-10 md:pt-20 lg:pt-32 px-5 md:px-10 lg:px-20 gap-10 lg:gap-0'>
      <motion.div
        className='w-full lg:w-1/2'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Left />
      </motion.div>

      <motion.div
        className='w-full lg:w-1/2 flex justify-center items-center'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Right />
      </motion.div>
    </div>
  );
}

export default Manual;

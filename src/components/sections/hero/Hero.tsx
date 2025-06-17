"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Left from './Left';
import Right from './Right';

function Hero() {
  return (
    <motion.div 
      className="flex flex-col w-full lg:flex-row h-auto lg:min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-screen lg:w-1/2">
        <Left />
      </div>
      <div className="hidden lg:block w-0 lg:w-1/2">
        <Right />
      </div>
    </motion.div>
  );
}

export default Hero;
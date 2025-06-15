"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Left from './Left';
import Right from './Right';

function Hero() {
  return (
    <motion.div 
      className="flex flex-col md:flex-row h-auto md:min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full md:w-1/2">
        <Left />
      </div>
      <div className="hidden md:block w-full md:w-1/2">
        <Right />
      </div>
    </motion.div>
  );
}

export default Hero;
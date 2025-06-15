"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function Right() {
    return (
        <div className='relative w-full pt-20'>
            <motion.svg 
                className='w-full absolute top-0 right-0 h-screen' 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                fill="#fff1da"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <path d="
                    M 20,0
                    L 100,0
                    C 100,0 100,5 100,10
                    L 100,90
                    C 100,95 95,100 90,100
                    L 60,100
                    C 30,85 40,70 30,50
                    C 20,30 10,15 20,0
                    Z
                " />
            </motion.svg>
            
            <div className='relative z-10'>
                <motion.div 
                    className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-48 h-12 bg-black/20 rounded-full blur-sm'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                />
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <Image 
                        className='relative z-10'
                        src="/images/women_irish.png"
                        alt='Women'
                        width={600}
                        height={1000}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Right
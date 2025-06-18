'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface ILeftProps {
  total: number
  current: number
  onDotClick: (index: number) => void
}

function Left({ total, current, onDotClick }: ILeftProps) {
  return (
    <motion.div
      className='flex flex-col justify-between h-full'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='space-y-5 text-center lg:text-start'>
        <p className='text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold'>
          TESTIMONIALS
        </p>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold'>
          What People Say<br />
          About Us.
        </h2>
      </div>

      <div className='lg:flex items-center gap-2 mt-4 hidden'>
        {Array.from({ length: total }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === current ? 'bg-[#181e4b] scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: index === current ? 1.25 : 1, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: index === current ? 1.25 : 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Left

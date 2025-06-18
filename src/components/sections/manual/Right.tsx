"use client"
import React from 'react'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { IoLeafOutline } from 'react-icons/io5'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

function Right() {
  return (
    <motion.div
      className='relative rounded-3xl shadow-2xl p-7 transition duration-300 hover:scale-[1.01] hover:shadow-xl bg-white w-full max-w-lg'
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className='overflow-hidden relative z-10'>
        <div className='relative h-48 rounded-2xl overflow-hidden'>
          <Image
            src="https://i.pinimg.com/736x/b3/93/81/b3938122aaad4a58428d6fb1b6b6647d.jpg"
            alt="Trip to Greece"
            fill
            className='object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>

        <div className='p-6 space-y-4'>
          <h3 className='text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors'>
            Trip To Greece
          </h3>

          <div className='flex items-center text-lg gap-2 font-semibold text-gray-500'>
            <span>14-29 June </span>
            <span> | </span>
            <span> by Robbin jr</span>
          </div>

          <div className='flex items-center text-lg space-x-4 text-gray-400'>
            {[IoLeafOutline, HiOutlineOfficeBuilding, RiSendPlaneFill].map((Icon, idx) => (
              <div
                key={idx}
                className="p-2 rounded-full hover:bg-purple-50 transition duration-300 hover:scale-110"
              >
                <Icon className="w-6 h-6 hover:text-purple-500 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className='flex items-center justify-between pt-2'>
            <div className='flex items-center space-x-2'>
              <BsPeople className='w-6 h-6 text-gray-400' />
              <span className='text-gray-500 text-lg font-semibold'>24 people going</span>
            </div>
            <AiOutlineHeart
              className='w-5 h-5 text-gray-300 hover:text-red-500 hover:bg-red-100 p-1 rounded-full cursor-pointer transition-all duration-300 hover:scale-110'
            />
          </div>
        </div>
      </div>

      <div className='absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-lg p-4 w-60 z-20 transition duration-300 hover:scale-[1.02] hover:shadow-2xl'>
        <div className='flex items-center space-x-3'>
          <div className='w-12 h-12 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110'>
            <Image
              src="https://i.pinimg.com/736x/f9/19/87/f919870939975ec32eac7b16e8439457.jpg"
              alt="Rome temple"
              width={48}
              height={48}
              className='object-cover'
            />
          </div>
          <div className='flex-1'>
            <div className='flex items-center justify-between mb-1'>
              <span className='text-gray-400 font-semibold text-lg'>Ongoing</span>
            </div>
            <h4 className='font-bold text-gray-800 text-lg'>Trip to rome</h4>
            <div className='mt-2'>
              <div className='flex items-center justify-between text-xs text-gray-500 mb-1'>
                <span>40% completed</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-1'>
                <div className='bg-purple-500 h-1 rounded-full w-2/5'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Right

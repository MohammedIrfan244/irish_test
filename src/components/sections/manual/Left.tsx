"use client"
import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FaCreditCard, FaCar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    icon: <MdLocationOn className="w-6 h-6 text-white" />,
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bgColor: "bg-yellow-400"
  },
  {
    id: 2,
    icon: <FaCreditCard className="w-6 h-6 text-white" />,
    title: "Make Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bgColor: "bg-orange-500"
  },
  {
    id: 3,
    icon: <FaCar className="w-6 h-6 text-white" />,
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bgColor: "bg-teal-600"
  }
]

function Left() {
  return (
    <div className='py-8m px-3 lg:px-5'>
      <div className='space-y-8'>
        <div className='space-y-4 text-center lg:text-left'>
          <p className='text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold'>Easy and Fast</p>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold'>
            Book Your Next Trip<br />
            In 3 Easy Steps
          </h2>
        </div>

        <div className='space-y-8 mt-12'>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group flex items-start space-x-4 transition duration-300 hover:scale-[1.02] hover:shadow-md hover:bg-gray-50 rounded-xl p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div
                className={`${step.bgColor} rounded-xl p-3 flex-shrink-0 group-hover:rotate-[12deg] transition-transform duration-300`}
              >
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-500 group-hover:text-gray-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Left

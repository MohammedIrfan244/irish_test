'use client'
import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'

function Testimonial() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const totalSlides = 4

  const handleSelection = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div className='flex flex-col lg:flex-row w-full pt-20 lg:pt-32 px-5 md:px-10 lg:px-20'>
      <div className='w-full lg:w-1/2'>
        <Left 
          total={totalSlides} 
          current={selectedIndex} 
          onDotClick={handleSelection}
        />
      </div>
      <div className='w-full lg:w-1/2'>
        <Right 
          selectedIndex={selectedIndex}
          onCardClick={handleSelection}
        />
      </div>
    </div>
  )
}

export default Testimonial
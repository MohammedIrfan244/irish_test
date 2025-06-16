import React from 'react'
import Left from './Left'
import Right from './Right'



function Testimonial() {
  return (
    <div className='flex flex-col lg:flex-row w-full pt-10 md:pt-20 lg:pt-32 px-5 md:px-10 lg:px-20'>
      <div className='w-full lg:w-1/2'>
        <Left total={4} current={4} />
      </div>
      <div className='w-full lg:w-1/2'>
        <Right />
      </div>
    </div>
  )
}

export default Testimonial

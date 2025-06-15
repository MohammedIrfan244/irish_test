import React from 'react'
import Image from 'next/image'
import { TiLocationArrow } from "react-icons/ti";

interface CardsProps {
  image: string
  place: string
  price: number
  days: number
}

function Cards({ image, place, price, days }: CardsProps) {
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`
  }

  const formatDays = (days: number) => {
    return `${days} Days Trip`
  }

 return (
    <div className='bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      <div className='w-90 h-96 overflow-hidden relative'>
        <Image 
          src={image} 
          alt={place}
          fill
          className='object-cover hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='p-6 space-y-3 flex flex-col justify-between'>
        <div className='flex justify-between items-center'>
        <h3 className='text-xl font-semibold text-[#5e6282]'>{place}</h3>
          <span className='text-lg font-semibold text-[#5e6282]'>{formatPrice(price)}</span>
        </div>
        <div className='flex items-center gap-2'>
            <TiLocationArrow className='text-3xl' />
          <p className='text-lg font-semibold text-[#5e6282]'>{formatDays(days)}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
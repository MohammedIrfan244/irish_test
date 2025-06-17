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
  const formatPrice = (price: number) => `$${price.toLocaleString()}`
  const formatDays = (days: number) => `${days} Days Trip`

  return (
    <div className='bg-white rounded-2xl md:rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-[320px] mx-auto'>
      <div className='relative aspect-[4/5] w-full'>
        <Image 
          src={image} 
          alt={place}
          fill
          className='object-cover hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='p-4 md:p-5 space-y-3'>
        <div className='flex justify-between items-center'>
          <h3 className='text-base md:text-lg font-semibold text-[#5e6282]'>{place}</h3>
          <span className='text-sm md:text-base font-semibold text-[#5e6282]'>{formatPrice(price)}</span>
        </div>
        <div className='flex items-center gap-2'>
          <TiLocationArrow className='text-xl md:text-2xl text-[#5e6282]' />
          <p className='text-sm md:text-base font-semibold text-[#5e6282]'>{formatDays(days)}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;

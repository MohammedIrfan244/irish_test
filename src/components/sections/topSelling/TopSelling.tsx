'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Jalebi from '@/components/shared/helper/Jalebi';
import Cards from './Cards';

interface IPlace {
  id: string;
  image: string;
  place: string;
  price: number;
  days: number;
}

const PLACES: IPlace[] = [
  {
    id: "first",
    image: "https://i.pinimg.com/736x/13/2d/0d/132d0dc63d132e1a614c9995145d4214.jpg",
    place: "Rome, Italy",
    price: 5420,
    days: 10
  },
  {
    id: "second",
    image: "https://i.pinimg.com/736x/51/6e/f7/516ef796398c931288045e6eec3f9c98.jpg",
    place: "London, UK",
    price: 4200,
    days: 12
  },
  {
    id: "third",
    image: "https://i.pinimg.com/736x/ef/2f/df/ef2fdf8639037969ab8aa9277e8bfbd8.jpg",
    place: "Full Europe",
    price: 8500,
    days: 28
  }
];

function TopSelling() {
  return (
    <div className='pt-10 md:pt-20 lg:pt-32'>
      <div className='relative space-y-5 md:space-y-10'>
        <p className='text-center text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold'>TOP SELLING</p>
        <h2 className='text-center text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold'>Top Destinations</h2>
        
        <div className='md:absolute right-0 top-0 min-w-40 md:block hidden'>
          <Jalebi size={400} />
        </div>

        <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {PLACES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                <Cards
                  image={item.image}
                  place={item.place}
                  price={item.price}
                  days={item.days}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;

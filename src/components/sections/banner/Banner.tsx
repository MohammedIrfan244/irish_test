'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaSpotify,
} from 'react-icons/fa';

const brands = [
  { icon: FaApple, name: 'Apple' },
  { icon: FaGoogle, name: 'Google' },
  { icon: FaMicrosoft, name: 'Microsoft' },
  { icon: FaAmazon, name: 'Amazon' },
  { icon: FaSpotify, name: 'Spotify' },
];

function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop:true,
    align:'start',
    dragFree:false,
    slidesToScroll:1,
    breakpoints:{}
  });

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = setInterval(()=>{
      emblaApi.scrollNext()
    },4000)
    return ()=>clearInterval(autoScroll)
  }, [emblaApi]);

  return (
    <div className="w-full px-4 md:px-12 py-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {brands.map((brand) => {
            const Icon = brand.icon;

            return (
              <div
                className="flex-shrink-0 flex flex-col items-center justify-center mx-4 transition-all duration-300 bg-gray-100 shadow-2xl scale-110 opacity-100' 
                  rounded-2xl p-4 w-32 md:w-40"
                key={brand.name}
              >
                <Icon className={`text-4xl md:text-5xl text-gray-800`} />
                <span className="text-sm md:text-base font-medium mt-2 text-gray-800">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Banner;

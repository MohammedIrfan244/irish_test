'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { easeOut, motion } from 'framer-motion';
import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaSpotify,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDropbox,
} from 'react-icons/fa';

const brands = [
  { icon: FaApple, name: 'Apple' },
  { icon: FaGoogle, name: 'Google' },
  { icon: FaMicrosoft, name: 'Microsoft' },
  { icon: FaAmazon, name: 'Amazon' },
  { icon: FaSpotify, name: 'Spotify' },
  { icon: FaFacebook, name: 'Facebook' },
  { icon: FaLinkedin, name: 'LinkedIn' },
  { icon: FaTwitter, name: 'Twitter' },
  { icon: FaYoutube, name: 'YouTube' },
  { icon: FaDropbox, name: 'Dropbox' },
];

const duplicatedBrands = [...brands, ...brands];

function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true, 
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 }
    }
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); 

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <motion.div 
      className="w-full px-0 py-16 mt-10 lg:mt-16 overflow-hidden bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full">
          {duplicatedBrands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <motion.div
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:false}}
              transition={{duration:0.9,ease:easeOut}}
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 
                  flex flex-col items-center justify-center 
                  transition-all duration-300 ease-in-out 
                  hover:bg-gray-100 hover:shadow-2xl hover:scale-105 
                  rounded-2xl p-6 mx-2"
              >
                <Icon className="text-3xl sm:text-4xl md:text-5xl text-gray-800" />
                <span className="text-xs sm:text-sm md:text-base font-medium mt-2 text-gray-800">
                  {brand.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
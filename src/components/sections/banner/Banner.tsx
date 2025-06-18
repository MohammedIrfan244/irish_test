'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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

const infiniteBrands = [...brands, ...brands];

function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
  });

  useEffect(() => {
    if (!emblaApi) return;

    let rafId: number;

    const scroll = () => {
      const delta = 0.02;
      emblaApi.scrollTo(emblaApi.scrollProgress() + delta);
      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(rafId);
  }, [emblaApi]);

  return (
    <div className="w-full px-0 py-16 mt-10 lg:mt-16 overflow-hidden bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full">
          {infiniteBrands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 
                  flex flex-col items-center justify-center 
                  transition-all duration-300 ease-in-out 
                  hover:bg-gray-100 hover:shadow-2xl hover:scale-105 
                  rounded-2xl p-6"
              >
                <Icon className="text-3xl sm:text-4xl md:text-5xl text-gray-800" />
                <span className="text-xs sm:text-sm md:text-base font-medium mt-2 text-gray-800">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Banner;

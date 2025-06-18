'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Pattern from './Pattern';
import Cards from './Cards';
import { motion } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface ICategory {
  id: string;
  image: string;
  title: string;
  description: string;
}

const CATEGORIES: ICategory[] = [
  {
    id: "first",
    image: "/images/radar.png",
    title: "Calculated Weather",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "seconnd",
    image: "/images/plane.png",
    title: "Best Flights",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "third",
    image: "/images/mice.png",
    title: "Local Events",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    id: "fourth",
    image: "/images/gearicon.png",
    title: "Customization",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
  }
];

function Category() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <div className='pt-10 md:pt-20 lg:pt-32'>
      <motion.div
        className='relative space-y-5 md:space-y-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className='text-center text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold'>
          CATEGORY
        </p>
        <h2 className='text-center text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold'>
          We Offer Best Services
        </h2>

        <div className='md:absolute right-0 top-0 min-w-40 md:block hidden'>
          <Pattern />
        </div>

        <div className='relative px-5'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {CATEGORIES.map((item, index) => (
                <div key={item.id} className='flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0'>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                  >
                    <Cards
                      title={item.title}
                      image={item.image}
                      description={item.description}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <motion.button
            onClick={scrollPrev}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className='absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 z-20 transition-all duration-200'
            aria-label="Previous slide"
          >
            <IoChevronBack className='w-4 h-4 md:w-6 md:h-6 text-[#181e4b]' />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className='absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 z-20 transition-all duration-200'
            aria-label="Next slide"
          >
            <IoChevronForward className='w-4 h-4 md:w-6 md:h-6 text-[#181e4b]' />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Category;

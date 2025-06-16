import React from 'react';

interface ILeftProps {
  total: number;
  current: number;
}

function Left({ total, current }: ILeftProps) {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='space-y-5'>
        <p className='text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold'>TESTIMONIALS</p>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold'>
          What People Say<br />
          About Us.
        </h2>
      </div>

      <div className='lg:flex items-center gap-2 mt-4 hidden'>
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index+1 === current ? 'bg-[#181e4b]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Left;

import Image from 'next/image';
import React from 'react';

interface ICards {
  name: string;
  image: string;
  description: string;
  testimonial: string;
  isActive?: boolean;
  stackIndex: number;
}

function Cards({ name, image, description, testimonial, isActive = false, stackIndex }: ICards) {
  return (
    <div 
      className={`w-[450px] h-auto bg-white shadow-xl rounded-xl p-5 relative transition-all duration-500 ease-out cursor-pointer ${
        isActive ? 'scale-100 shadow-2xl' : 'scale-95 shadow-lg hover:scale-98'
      }`}
      style={{
        zIndex: isActive ? 100 : 50 - stackIndex,
        transform: `translateY(${stackIndex * 30}px) scale(${isActive ? 1 : 0.95 - stackIndex * 0.02})`,
      }}
    >
      <div className='flex w-full justify-start'>
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image src={image} alt={name} width={80} height={80} className="object-cover" />
        </div>
      </div>

      <div className="h-full flex flex-col justify-end items-end space-y-2 text-right">
        <p className="font-semibold text-gray-500">&quot;{testimonial}&quot;</p>
        <h2 className="text-lg font-bold text-gray-700">{name}</h2>
        <h3 className="text-md text-gray-600">{description}</h3>
      </div>
    </div>
  );
}

export default Cards;
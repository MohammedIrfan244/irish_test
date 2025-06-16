import Image from 'next/image';
import React from 'react';

interface ICards {
  name: string;
  image: string;
  description: string;
  testimonial: string;
}

function Cards({ name, image, description, testimonial }: ICards) {
  return (
    <div className="w-[450px] h-[250px] bg-white shadow-xl rounded-xl p-5 relative">
      <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image src={image} alt={name} width={80} height={80} className="object-cover" />
      </div>

      <div className="h-full flex flex-col justify-end items-end space-y-2 text-right">
        <p className="text-sm text-gray-500 italic">&quot;{testimonial}&quot;</p>
        <h2 className="text-lg font-bold text-gray-700">{name}</h2>
        <h3 className="text-md text-gray-600">{description}</h3>
      </div>
    </div>
  );
}


export default Cards;

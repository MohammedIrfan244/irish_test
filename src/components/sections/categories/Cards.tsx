import Image from 'next/image';
import React from 'react';

interface ICardProps {
    image: string;
    title: string;
    description: string;
}

function Cards({ image, title, description }: ICardProps) {
    return (
        <div className="flex items-center justify-center p-8 md:p-12 relative group">
            <div className="
        h-72 w-56 md:h-96 md:w-72 p-5
        flex flex-col items-center justify-around
        rounded-2xl md:rounded-3xl lg:rounded-4xl
        bg-white relative z-10
        transition-all duration-300
        group-hover:shadow-lg
        active:scale-95 
        shadow-sm md:shadow-none
        sm:animate-pulse md:animate-none
      ">
                <div className="h-16 w-16 md:h-32 md:w-32 relative">
                    <Image
                        className="relative z-10 transform transition duration-300 group-hover:-rotate-6"
                        src={image}
                        alt="Icon"
                        height={100}
                        width={100}
                    />

                    <div className="bg-red-100 z-0 rounded-tl-2xl rounded-br-2xl absolute bottom-0 right-0 w-10 h-10 md:w-24 md:h-24" />
                </div>
                <h1 className="text-[#181e4b] text-lg md:text-xl font-semibold">{title}</h1>
                <div className="w-full break-words">
                    <p className="text-lg font-semibold text-gray-500">{description}</p>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 w-14 h-14 md:w-32 md:h-32 bg-[#db6a52] z-0 rounded-tl-2xl rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
}

export default Cards;

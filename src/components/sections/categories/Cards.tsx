import Image from 'next/image'
import React from 'react'

interface ICardProps {
    image: string
    title: string
    description: string
}

function Cards({ image, title, description }: ICardProps) {
    return (
        <div className='flex items-center justify-center p-8 md:p-12 relative group'>
            <div className='h-72 flex flex-col items-center justify-around w-56  p-5 md:h-96 md:w-72 rounded-2xl bg-white md:rounded-3xl relative z-10 lg:rounded-4xl transition-shadow duration-300 group-hover:shadow-lg'>
                <div className='h-7 w-7 md:h-16 md:w-16 bg-red-100 rounded-tl-2xl rounded-br-2xl overflow-visible'>
                    <Image
                    src={image}
                    alt="Icon"
                    height={100}
                    width={100}
                    />
                </div>
                <h1 className='text-[#181e4b] text-lg md:text-xl font-semibold'>{title}</h1>
                <div className='w-full wrap-break-word'>
                <p className='text-lg font-semibold text-gray-500'>{description}</p>
                </div>
            </div>
            <div className='absolute left-0 bottom-0 w-14 h-14 md:w-32 md:h-32 bg-[#db6a52] z-0 rounded-tl-2xl rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </div>
    )
}

export default Cards
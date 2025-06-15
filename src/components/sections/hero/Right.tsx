import Image from 'next/image'
import React from 'react'

function Right() {
    return (
        <div className='relative w-full pt-20'>
            <svg 
                className='w-full absolute top-0 right-0 h-screen' 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                fill="#fff1da"
            >
                <path d="
                    M 20,0
                    L 100,0
                    C 100,0 100,5 100,10
                    L 100,90
                    C 100,95 95,100 90,100
                    L 60,100
                    C 30,85 40,70 30,50
                    C 20,30 10,15 20,0
                    Z
                " />
            </svg>
            <div className='relative z-10'>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-48 h-12 bg-black/20 rounded-full blur-sm'></div>
                
                <Image 
                    className='relative z-10'
                    src="/images/women_irish.png"
                    alt='Women'
                    width={600}
                    height={1000}
                />
            </div>
        </div>
    )
}

export default Right
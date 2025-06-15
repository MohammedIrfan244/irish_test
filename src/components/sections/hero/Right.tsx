import React from 'react'

function Right() {
    return (
        <div className='relative w-full h-screen'>
            <svg 
                className='w-full h-full' 
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
        </div>
    )
}

export default Right
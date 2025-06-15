import React from 'react'

function Logo() {
  return (
    <h2 className='font-bold text-2xl md:text-3xl lg:text-5xl relative inline-block' style={{fontFamily:'var(--font-gabarito)'}}>
      Jad
      <span className="relative">
        o
        <span className="absolute bottom-1.5 md:bottom-2.5 lg:bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></span>
      </span>
      <span className="relative">
        o
        <span className="absolute bottom-1.5 md:bottom-2.5 lg:bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></span>
      </span>
    </h2>
  )
}

export default Logo

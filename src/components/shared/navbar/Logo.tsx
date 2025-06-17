import React from 'react'

function Logo() {
  return (
    <h2
      className="whitespace-nowrap font-bold text-xl md:text-2xl lg:text-4xl relative inline-block transition-transform duration-300 hover:scale-105"
      style={{ fontFamily: 'var(--font-gabarito)' }}
    >

      Jad
      <span className="relative">
        o
        <span className="absolute bottom-1.5 md:bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"></span>
      </span>
      <span className="relative">
        o
        <span className="absolute bottom-1.5 md:bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"></span>
      </span>
    </h2>
  );
}


export default Logo

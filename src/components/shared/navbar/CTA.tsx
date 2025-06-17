import React from 'react'

function CTA() {
  return (
    <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
      <div className="relative group cursor-pointer overflow-hidden">
        <p className="relative z-10  py-1 px-2 md:px-4 md:py-1.5 lg:px-5 lg:py-2 rounded-xl text-sm md:text-base lg:text-lg text-black transition-colors duration-300 group-hover:text-white">
          Login
        </p>
        <span
          className="absolute left-0 bottom-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="border-black rounded-sm md:rounded-md border py-1 px-2 md:px-4 md:py-1.5 lg:px-5 lg:py-2 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">
        <p className="text-sm md:text-base lg:text-lg">Sign Up</p>
      </div>
    </div>
  );
}


export default CTA

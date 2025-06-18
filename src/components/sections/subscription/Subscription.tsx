import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPaperPlane } from "react-icons/fa"; 
import Pattern from '../categories/Pattern';

function Subscription() {
  return (
    <div className="pt-10 md:pt-20 p-10 md:p-16 lg:p-20 relative">
      <div className="relative rounded-tl-2xl md:rounded-tl-[100px] lg:rounded-tl-[150px] z-10 rounded-tr-2xl bg-[#f9f7fe] rounded-bl-2xl rounded-br-2xl shadow-lg gap-5 md:gap-10 lg:gap-20 p-6 md:p-10 lg:py-20 flex flex-col justify-evenly">
          <button className="p-3 md:p-5 lg:p-7 absolute -right-2 -top-2 rounded-full bg-blue-500 shadow-md hover:shadow-lg transition duration-200">
            <FaPaperPlane className="w-5 h-5 md:w-7 md:h-7 lg:w-10
             lg:h-10 text-white" />
          </button>
        <div className="text-center font-bold">
          <h2 className="text-lg md:text-2xl lg:text-4xl text-gray-500 leading-relaxed">
            Subscribe to get information, latest news and other
            <br />
            interesting offers about Jadoo
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto w-full">
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <MdEmail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-gray-700"
            />
          </div>

          <button className="bg-[#ff8e6c] text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className='lg:absolute z-0 hidden lg:block bottom-0 right-0'>
        <Pattern/>
      </div>
    </div>
  );
}

export default Subscription;

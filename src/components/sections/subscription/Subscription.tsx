import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPaperPlane } from "react-icons/fa"; 

function Subscription() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32 px-5 md:px-10 lg:px-20">
      <div className="relative rounded-tl-4xl bg-[#f9f7fe] rounded-bl-xl rounded-br-lx shadow-lg p-12 md:p-12 flex flex-col justify-between min-h-[400px]">
                <div className="absolute top-6 right-6">
          <button className="p-3 rounded-full bg-blue-500 shadow-md hover:shadow-lg transition duration-200">
            <FaPaperPlane className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 leading-relaxed">
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
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-gray-600"
            />
          </div>

          <button className="bg-[#ff8e6c] text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;

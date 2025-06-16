import React from 'react';
import { 
  FaApple, 
  FaGoogle, 
  FaMicrosoft, 
  FaAmazon, 
  FaSpotify 
} from 'react-icons/fa';

function Banner() {
  return (
      <div className="w-full px-12 py-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <FaApple className="text-4xl md:text-5xl text-gray-600" />
          </div>
          
          <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <FaGoogle className="text-4xl md:text-5xl text-gray-600" />
          </div>
          
          <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <FaMicrosoft className="text-4xl md:text-5xl text-gray-600" />
          </div>
          
          <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <FaAmazon className="text-4xl md:text-5xl text-gray-600" />
          </div>
          
          <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <FaSpotify className="text-4xl md:text-5xl text-gray-600" />
          </div>
      </div>
    </div>
  );
}

export default Banner;
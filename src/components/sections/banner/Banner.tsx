import React from 'react';
import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaSpotify,
} from 'react-icons/fa';

function Banner() {
  return (
    <div className="w-full px-12 py-20">
      <div className="flex items-center justify-between flex-wrap gap-8 md:gap-0">

        <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaApple className="text-4xl md:text-5xl text-gray-800" />
          <span className="text-base md:text-lg text-gray-800 font-medium">Apple</span>
        </div>

        <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaGoogle className="text-4xl md:text-5xl text-gray-800" />
          <span className="text-base md:text-lg text-gray-800 font-medium">Google</span>
        </div>

        <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaMicrosoft className="text-4xl md:text-5xl text-gray-800" />
          <span className="text-base md:text-lg text-gray-800 font-medium">Microsoft</span>
        </div>

        <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaAmazon className="text-4xl md:text-5xl text-gray-800" />
          <span className="text-base md:text-lg text-gray-800 font-medium">Amazon</span>
        </div>

        <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaSpotify className="text-4xl md:text-5xl text-gray-800" />
          <span className="text-base md:text-lg text-gray-800 font-medium">Spotify</span>
        </div>

      </div>
    </div>
  );
}

export default Banner;

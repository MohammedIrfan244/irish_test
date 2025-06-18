import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 xl:px-20 w-full">
      <div className="max-w-7xl mx-auto font-semibold">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="flex-shrink-0 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mb-3" style={{ fontFamily: 'var(--font-gabarito)' }}>Jadoo.</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs mx-auto lg:mx-0">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-12 flex-grow lg:max-w-md">
            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-800 mb-3 md:mb-4">Company</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">About</a></li>
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Careers</a></li>
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Mobile</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-800 mb-3 md:mb-4">Contact</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Help/FAQ</a></li>
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Press</a></li>
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Affiliates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-800 mb-3 md:mb-4">More</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Airline fees</a></li>
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Airline</a></li>
                <li><a href="#" className="text-gray-500 text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors block">Low fare tips</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-6 flex-shrink-0">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <FaFacebookF className="text-gray-600 text-sm md:text-base" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                <FaInstagram className="text-white text-sm md:text-base" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <FaTwitter className="text-gray-600 text-sm md:text-base" />
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-500 text-sm md:text-base font-medium mb-3">Discover our app</p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <div className="bg-black text-white px-3 py-2 md:px-4 md:py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer min-w-max">
                  <div className="text-xs">
                    <div className="opacity-80 leading-tight">GET IT ON</div>
                    <div className="font-semibold leading-tight">Google Play</div>
                  </div>
                </div>
                <div className="bg-black text-white px-3 py-2 md:px-4 md:py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer min-w-max">
                  <div className="text-xs">
                    <div className="opacity-80 leading-tight">Available on the</div>
                    <div className="font-semibold leading-tight">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 lg:pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-xs md:text-sm">All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
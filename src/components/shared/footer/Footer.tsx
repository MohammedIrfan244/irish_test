import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white py-6 md:py-12 lg:py-16 px-3 md:px-8 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto font-semibold">
        <div className="flex justify-between gap-3 md:gap-6 lg:gap-8 mb-6 md:mb-10 lg:mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-2 md:mb-3 lg:mb-4" style={{ fontFamily: 'var(--font-gabarito)' }}>Jadoo.</h2>
            <p className="text-gray-500 text-xs md:text-sm lg:text-base leading-relaxed max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-lg lg:text-xl font-medium text-gray-800 mb-3 md:mb-5 lg:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4">
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-lg lg:text-xl font-medium text-gray-800 mb-3 md:mb-5 lg:mb-6">Contact</h3>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4">
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Help/FAQ</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Affilates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-lg lg:text-xl font-medium text-gray-800 mb-3 md:mb-5 lg:mb-6">More</h3>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4">
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Airlinefees</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Airline</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-base lg:text-lg hover:text-gray-800 transition-colors">Low fare tips</a></li>
            </ul>
          </div>

          <div className="flex flex-col justify-between items-start gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <FaFacebookF className="text-gray-600 text-xs md:text-base lg:text-lg" />
              </div>
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <FaInstagram className="text-white text-xs md:text-base lg:text-lg" />
              </div>
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <FaTwitter className="text-gray-600 text-xs md:text-base lg:text-lg" />
              </div>
            </div>
            <p className="text-gray-500 text-sm md:text-lg lg:text-xl text-start font-medium">Discover our app</p>

            <div className="text-center lg:text-right">
              <div className="flex gap-2 md:gap-3 lg:gap-4 justify-center lg:justify-end mb-4">
                <div className="bg-black text-white px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-md md:rounded-lg lg:rounded-xl flex items-center gap-1 md:gap-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
                <div className="bg-black text-white px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-md md:rounded-lg lg:rounded-xl flex items-center gap-1 md:gap-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-xs opacity-80">Available on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-10 lg:mt-12 pt-4 md:pt-6 lg:pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-xs md:text-sm lg:text-sm">All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
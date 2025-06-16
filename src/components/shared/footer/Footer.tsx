import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white py-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-5xl font-medium text-gray-800 mb-4">Jadoo.</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Help/FAQ</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Affilates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6">More</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Airlinefees</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Airline</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-gray-800 transition-colors">Low fare tips</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-end gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <FaFacebookF className="text-gray-600 text-sm" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <FaInstagram className="text-white text-sm" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <FaTwitter className="text-gray-600 text-sm" />
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="flex gap-4 justify-center lg:justify-end mb-4">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>

                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-xs opacity-80">Available on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-xl font-medium">Discover our app</p>
            </div>
          </div>
        </div>


        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
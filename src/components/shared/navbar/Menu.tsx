'use client';
import React, { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';

const MENU = [
  { id: 1, label: 'Destinations' },
  { id: 2, label: 'Hotels' },
  { id: 3, label: 'Flights' },
  { id: 4, label: 'Bookings' },
];

function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* for pc */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {MENU.map((item) => (
          <p
            className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-orange-600 transition-colors duration-200"
            key={item.id}
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className="md:hidden">
        <HiBars3 className="text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
      </div>

      {/* for sm */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6">
          <div className="flex justify-end mb-6">
            <IoClose className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <nav className="flex flex-col gap-4">
            {MENU.map((item) => (
              <p
                className="text-base cursor-pointer hover:bg-gray-100 rounded px-2 py-1 transition-colors duration-200"
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </p>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}


export default Menu;

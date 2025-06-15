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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center md:gap-10 lg:gap-20">
        {MENU.map((item) => (
          <p className="hover:cursor-pointer" key={item.id}>
            {item.label}
          </p>
        ))}
      </div>

      <div className="md:hidden">
        <HiBars3
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 transition-transform duration-300">
          <div className="flex justify-end mb-6">
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <nav className="flex flex-col gap-4">
            {MENU.map((item) => (
              <p
                className="hover:cursor-pointer text-lg"
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

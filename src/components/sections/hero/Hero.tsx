import React from 'react';
import Left from './Left';
import Right from './Right';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Left />
      </div>
      <div className="hidden md:block w-full md:w-1/2">
        <Right />
      </div>
    </div>
  );
}

export default Hero;

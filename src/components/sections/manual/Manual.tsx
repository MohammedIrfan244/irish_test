import React from 'react';
import Left from './Left';
import Right from './Right';

function Manual() {
  return (
    <div className='flex flex-col lg:flex-row w-full pt-10 md:pt-20 lg:pt-32 px-5 md:px-10 lg:px-20'>
      <div className='w-full lg:w-1/2'>
        <Left />
      </div>
      <div className='w-full lg:w-1/2'>
        <Right />
      </div>
    </div>
  );
}

export default Manual;

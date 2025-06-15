import React from 'react'

function Menu() {
    const MENU =  [
  { id: 1, label: "Destinations" },
  { id: 2, label: "Hotels" },
  { id: 3, label: "Flights" },
  { id: 4, label: "Bookings" },
];

  return (
    <div className='flex items-center md:gap-15 lg:gap-20'>
      {MENU.map(item=>{
       return <p className='hover:cursor-pointer' key={item.id}>{item.label}</p>
      })}
    </div>
  )
}

export default Menu

import React from 'react'
import Pattern from './Pattern'
import Cards from './Cards'

interface IGategory {
  id: string
  image: string
  title: string
  description: string
}

const CATEGORIES: IGategory[] = [
  {
    id: "first",
    image: "/images/radar.png",
    title: "Calculated Weather",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "seconnd",
    image: "/images/plane.png",
    title: "Best Flights",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "third",
    image: "/images/mice.png",
    title: "Local Events",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    id: "fourth",
    image: "/images/gearicon.png",
    title: "Customization",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
  }
];


function Category() {
  return (
    <div className='pt-10 md:pt-20 lg:pt-32'>
      <div className='relative space-y-5 md:space-y-10'>
        <p className='text-center text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold'>CATEGORY</p>
        <h2 className='text-center text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold'>We Offer Best Services</h2>
        <div className='md:absolute right-0 top-0 min-w-40 md:block hidden'>
          <Pattern />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5'>
          {CATEGORIES.map(item => (
            <Cards
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Category
import React from 'react'
import Cards from './Cards'


const clients = [
  {
    name: "Sarah Johnson",
    image: "https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg", 
    description: "CEO, TechStart Inc.",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Michael Chen",
    image: "https://i.pinimg.com/736x/91/21/f2/9121f2b3c557192b6fcd234782a7c399.jpg", 
    description: "Marketing Director, Growth Co.",
    testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in."
  }
]


function Right() {
  return (
     <div className="relative h-[400px] w-[500px] mx-auto">
      {clients.map((client, index) => (
        <div
          key={index}
          className="absolute left-0 right-0 transition-all duration-300"
          style={{
            top: `${index * 70}px`, 
            zIndex: clients.length - index, 
          }}
        >
          <Cards
            name={client.name}
            image={client.image}
            description={client.description}
            testimonial={client.testimonial}
          />
        </div>
      ))}
    </div>
  )
}

export default Right
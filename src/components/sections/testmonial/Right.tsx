'use client'
import React from 'react'
import Cards from './Cards'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

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
  },
  {
    name: "Emily Rodriguez",
    image: "https://i.pinimg.com/736x/59/27/3d/59273d3e6ccddd906b58414f746b858a.jpg",
    description: "Product Manager, InnovateLab",
    testimonial: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "David Kim",
    image: "https://i.pinimg.com/736x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg",
    description: "CTO, FutureTech Solutions",
    testimonial: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  }
]

interface IRightProps {
  selectedIndex: number
  onCardClick: (index: number) => void
}

function Right({ selectedIndex, onCardClick }: IRightProps) {
  const getStackOrder = () => {
    const reordered = [...clients]
    return reordered.map((client, originalIndex) => ({
      ...client,
      originalIndex,
      stackIndex: originalIndex === selectedIndex ? 0 :
        originalIndex < selectedIndex ?
          (clients.length - selectedIndex + originalIndex) :
          (originalIndex - selectedIndex),
      isActive: originalIndex === selectedIndex
    })).sort((a, b) => a.stackIndex - b.stackIndex)
  }

  const stackedCards = getStackOrder()

  return (
    <div className="relative h-[400px] w-[500px] mx-auto">
      {stackedCards.map((client) => (
        <div
          key={client.originalIndex}
          className="absolute left-0 right-0"
          onClick={() => onCardClick(client.originalIndex)}
        >
          <Cards
            name={client.name}
            image={client.image}
            description={client.description}
            testimonial={client.testimonial}
            isActive={client.isActive}
            stackIndex={client.stackIndex}
          />
        </div>
      ))}
      <button
        onClick={() => onCardClick((selectedIndex - 1 + clients.length) % clients.length)}
        className="absolute right-[-60px] top-0 hover:cursor-pointer w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-50"
      >
        <FiChevronUp className="w-5 h-5 text-gray-600" />
      </button>
      <button
        onClick={() => onCardClick((selectedIndex + 1) % clients.length)}
        className="absolute hover:cursor-pointer right-[-60px] top-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-50"
      >
        <FiChevronDown className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )
}

export default Right

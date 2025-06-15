import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import CTA from './CTA'
import Language from './Language'

function Navbar() {
  return (
    <div className='flex items-center justify-between h-20 md:h-24 relative z-40 lg:h-28 px-5 md:px-10 lg:px-20'>
      <Logo/>
      <div className='flex md:flex md:flex-row items-center font-semibold gap-5 md:gap-10 lg:gap-15 flex-row-reverse md:text-xl h-full '>
      <Menu/>
      <CTA/>
      <Language/>
      </div>
    </div>
  )
}

export default Navbar

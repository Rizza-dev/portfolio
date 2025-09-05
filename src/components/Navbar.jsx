import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw] xl:px-[9vw] py-4 w-full border-b'>
        <ThemeToggle />
    </div>
  )
}

export default Navbar
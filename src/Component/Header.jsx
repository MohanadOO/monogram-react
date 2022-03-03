import React from 'react'
import { backgroundLarge } from './images'

function Header() {
  return (
    <header className='relative'>
      <div>
        <img className='w-screen' src={backgroundLarge} alt='#' />
      </div>
      <div className='absolute md:top-[48%] md:left-[60%] top-[40%] left-[60%] mx-7'>
        <h1 className='md:text-4xl text-xl text-color14 font-bold tracking-widest'>
          A CONSOLE FOR EVERY WORKFLOW
        </h1>
        <br />
        <p className='text-color14 font-normal md:text-lg text-sm '>
          Discover the perfect console for yours.
        </p>
      </div>
    </header>
  )
}

export default Header

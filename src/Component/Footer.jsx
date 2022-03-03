import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-color14 pt-12 pb-20 text-color8 font-thin flex flex-col px-10 md:flex-row md:px-8 justify-evenly gap-[5rem] overflow-hidden'>
      <div className='flex flex-col gap-2 text-sm w-24 leading-5'>
        <p className='mb-3 capitalize font-bold'>Monogram</p>
        <p>305 King St. W. Suite 502 Kitchener, ON Canada</p>
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <p className='mb-3 capitalize font-bold'>Quick Links</p>
        <a href='#' className='hover:text-color10 hover:underline '>
          Home
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          How it Works
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Shop
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Download
        </a>
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <p className='mb-3 capitalize font-bold'>Help</p>
        <a href='#' className='hover:text-color10 hover:underline '>
          FAQs
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Support Center
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Shipping and Sales
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Palette Support
        </a>
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <p className='mb-3 capitalize font-bold'>Information</p>
        <a href='#' className='hover:text-color10 hover:underline '>
          About Us
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Work with us
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Privacy Policy
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Terms of Use
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Terms of sale
        </a>
        <a href='#' className='hover:text-color10 hover:underline '>
          Press Kit
        </a>
      </div>

      <div className='flex flex-col gap-2 text-sm w-[22rem] leading-5'>
        <p className='capitalize font-bold'>SUBSCRIBE TO MONOGRAM</p>
        <p>
          Master productivity with Creative Console and get all the latest
          Monogram news.
        </p>
        <div className='flex gap-5 mt-4'>
          <input
            className='bg-color14 border-2 border-color8 p-1 px-2'
            placeholder='Email Address'
            type='email'
          ></input>
          <button className='bg-color8 text-black p-1 px-5 rounded-md'>
            Submit
          </button>
        </div>
        <button></button>
        <p>© Monogram 2022</p>
      </div>
    </footer>
  )
}

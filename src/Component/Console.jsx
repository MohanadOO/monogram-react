import React, { useState } from 'react'

export default function Console(props) {
  const [visible, setVisible] = useState(true)
  return (
    <div
      onMouseEnter={() => setVisible(false)}
      onMouseLeave={() => setVisible(true)}
      className='grid cursor-pointer mb-10 relative '
    >
      <div>
        {visible ? (
          <img src={props.enter} alt='#' className='mx-auto' />
        ) : (
          <img src={props.leave} alt='#' className='mx-auto' />
        )}
      </div>
      <p className='uppercase font-bold text-sm bg-color14 text-white py-1 px-6 absolute right-0 mt-5'>
        In Stock
      </p>

      <div className='flex mt-3'>
        <div>
          <h2 className='font-semibold text-xl text-color3 tracking-widest uppercase'>
            {props.item}
          </h2>
          <p className='font-light text-xs tracking-wider mt-1'>
            {props.description}
          </p>
        </div>
        {visible && (
          <div>
            {props.oldPrice ? (
              <p className='absolute right-0 mt-1 text-color12 font-normal'>
                ${props.newPrice}
                <span className='line-through text-color14 ml-2'>
                  ${props.oldPrice}
                </span>
              </p>
            ) : (
              <p className='text-color14 absolute right-0 mt-1 font-light'>
                ${props.newPrice}
              </p>
            )}
          </div>
        )}
        {!visible && (
          <button className='absolute right-0 text-sm bg-color14 text-white mt-2 py-2 px-6 rounded-full font-bold'>
            Shop Now
          </button>
        )}
      </div>
    </div>
  )
}

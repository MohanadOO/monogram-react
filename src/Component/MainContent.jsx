import React from 'react'
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  createYourConsole,
} from './images'
import Console from './Console'

function MainContent() {
  return (
    <div>
      <div className='grid md:grid-cols-2 mt-10 xl:mx-[15rem] lg:mx-[10rem] md:mx-[2rem] sm:grid-cols-1 sm:mx-[5rem] mx-[2rem] gap-10 '>
        <Console
          item={'Traveler Console'}
          description={'Ideal for photo & video. Adaptable to any workflow.'}
          enter={img1}
          leave={img2}
          newPrice={399}
          oldPrice={499}
        />
        <Console
          item={'STUDIO CONSOLE'}
          description={'Ideal for photo & video. Adaptable to any workflow.'}
          enter={img3}
          leave={img4}
          newPrice={499}
          oldPrice={599}
        />
      </div>
      <div className='mb-20 xl:mx-[15rem] lg:mx-[10rem] sm:mx-[5rem] md:mx-[2rem] mx-[2rem]'>
        <Console
          item={'MASTER CONSOLE'}
          description={
            'Ideal for Virtual Production & Film. Adaptable to any workflow.'
          }
          enter={img5}
          leave={img6}
          newPrice={799}
          oldPrice={1099}
        />
      </div>
      <div className='flex flex-col justify-center items-center mt-5 relative'>
        <img alt='#' src={createYourConsole} />
        <h1 className='absolute md:text-4xl sm:text-2xl  text-color14 font-bold text-center top-10 tracking-wider uppercase'>
          Create Your Own Console
          <p className='md:mt-5 mt-2 md:text-lg sm:text-base text-color14 font-light'>
            Add-on to make it perfect
          </p>
        </h1>
      </div>
      <div className='grid md:grid-cols-2 mt-10 lg:mx-[5rem] lg:grid-cols-3 md:mx-[2rem] grid-cols-1 sm:mx-[5rem] gap-10 mx-[2rem]'>
        <Console
          item={'MONOGRAM CORE'}
          enter={img7}
          leave={img8}
          newPrice={149}
        />
        <Console
          item={'ORBITER MODULE'}
          enter={img9}
          leave={img10}
          newPrice={149}
        />
        <Console
          item={'DIAL MODULE'}
          enter={img11}
          leave={img12}
          newPrice={99}
        />
        <Console
          item={'SLIDER MODULE'}
          enter={img13}
          leave={img14}
          newPrice={149}
        />
        <Console
          item={'ESSENTIAL KEYS MODULE'}
          enter={img15}
          leave={img16}
          newPrice={99}
        />
        <Console
          item={'MONOGRAM CARE'}
          enter={img17}
          leave={img18}
          newPrice={'19 - 129'}
        />
      </div>
    </div>
  )
}

export default MainContent

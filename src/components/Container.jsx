import React from 'react'
import { Paginator } from './Paginator'
import { Botones } from './Botones'
export function Container() {
  return (
    <div className='Container flex flex-col  bg-[#393F6E] rounded-lg w-96 h-[35rem]  lg:w-4/6 lg:h-[22rem] justify-between'>
      <Paginator />

      <h2 className='text-xl text-center text-white font-sans font-medium px-5 lg:px-44 lg:text-lg'>Wich country does this flag 🏁 belong to?</h2>

      <Botones/>

    </div>
  )
}

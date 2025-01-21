import React from 'react'
import { Paginator } from './Paginator'
import { Botones } from './Botones'
export function Container({ counter, questions }) {

  return (
    <div className='Container flex flex-col  bg-[#393F6E] rounded-lg w-96 h-[35rem]  lg:w-4/6 lg:h-[22rem] justify-between'>
      <Paginator
        counter={counter}
      />

      <h2 className='text-xl text-center text-white font-sans font-medium px-5 lg:px-44 lg:text-lg'>
        {questions?.[counter]?.question}
      </h2>

      <Botones 
        options={questions?.[counter]?.options}
        answer={questions?.[counter]?.answer}
      />

    </div>
  )
}

import React from 'react'
import Titulo from './components/Titulo'
import Input from './components/Input'

export default function App() {
  return (
    <header className='flex bg-sky-950 justify-between items-center p-4'>
      <Titulo />
      <Input />
    </header>
  )
}

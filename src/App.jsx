import React from 'react'
import useCustomHooks from './hooks/custom-hooks'
/* import { useCustomHooks } from './hooks/custom-hooks' */
export default function App() {


  const { data } = useCustomHooks()

  return (
    <div><h1>hola</h1></div>
  )
    // <useCustomHooks/>
  
}

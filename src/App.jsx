
import React from 'react'
import Titulo from './components/Titulo'
import Input from './components/Input'
import { QuizCompleted } from "./components/QuizCompleted"
import Paginator from './components/paginator'
import useQuiz from './hooks/ useQuiz'

export default function App() {
  const { questions} = useQuiz()
 
  return (
    <>
    <header className='flex bg-sky-950 justify-between items-center p-4'>
      <Titulo />
      <Input />
    </header>

     <QuizCompleted />

    <div className='bg-slate-800 text-4xl'>App</div>
    <Paginator/>
    </>
  )

}

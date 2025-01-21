import { useState } from 'react'
import { Container } from './components/Container'
import Input from './components/Input'
import Titulo from './components/Titulo'
import useQuiz from './hooks/ useQuiz'


export default function App() {
  const { questions } = useQuiz()
  const [counter, setCounter] = useState(0)
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center relative bg-[url("icons/bg-sm.jpg")]  md:bg-[url("icons/bg.jpg")] md:bg-cover'>
      <header className='flex justify-between items-center w-full px-8 py-4'>
        <Titulo />
        <Input
          counter={counter}
        />
      </header>
      <Container
        counter={counter}
        questions = {questions}
      />
    </div>

  )

}

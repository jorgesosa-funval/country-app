import { useEffect, useState } from 'react'
import { Container } from './components/Container'
import Input from './components/Input'
import Titulo from './components/Titulo'
import useQuiz from './hooks/ useQuiz'


export default function App() {
  const { questions } = useQuiz()
  const [score, setScore] = useState(0)
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(0)
  const [selected, setSelected] = useState("")

  const handleClick = (value) => {
    setSelected(value)
    if (value === questions?.[counter].answer) {
      setScore((prevState) => prevState + 1)
    }
    setLoading(3)
  }

  useEffect(() => {

    if (loading > 0) {
      setTimeout(() => {
        setLoading((prevState) => prevState - 1)

        if (loading === 1) {
          setSelected("")
          setCounter((prevState) => prevState + 1)
        }
      }, 1000)

    }
  }, [loading])

  // Definir el final
  // arreglar el hook para devolver las opciones 


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center relative bg-[url("icons/bg-sm.jpg")]  md:bg-[url("icons/bg.jpg")] md:bg-cover'>
     <span className={`font-bold text-lg bg-white aspect-square text-center rounded-full p-2 transition-all duration-700 ${loading === 0 && 'opacity-0'}`}>
        {loading}
      </span>
      <header className='flex justify-between items-center w-full px-8 py-4 relative'>
        <Titulo />
        <Input
          score={score}
        />
      </header>
      <Container
        counter={counter}
        questions={questions}
        selected={selected}
        handleClick={handleClick}
      />
    </div>

  )

}

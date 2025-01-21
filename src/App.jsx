import { Container } from "./components/Container";
import Titulo from './components/Titulo'
import Input from './components/Input'
import { QuizCompleted } from "./components/QuizCompleted"
import Paginator from './components/paginator'
import useQuiz from './hooks/ useQuiz'

export default function App() {
  const { questions} = useQuiz()
 
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <h1 className='pt-44 pb-5'>Country Quiz</h1>
      <Container></Container>
    </div>

    
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

import Paginator from './components/paginator'
import useQuiz from './hooks/ useQuiz'


export default function App() {
  const { questions} = useQuiz()
 
  return (


    <>
    <div className='bg-slate-800 text-4xl'>App</div>
    <Paginator/>
    </>
    
  )
}

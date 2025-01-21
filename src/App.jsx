
import useQuiz from './hooks/ useQuiz'
export default function App() {
  const { questions } = useQuiz()
  console.log(questions)
  return (
    <div><h1>hola</h1></div>
  )
  
  
}

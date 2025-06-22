import { Header } from './components/Header'
import { Quiz } from './components/Quiz'
import { StartButton } from './components/StartButton'
import { useQuestionStore } from './store/question'
import JSIcon from './assets/svg/javascript.svg?react'
import { QuizStats } from './components/QuizStats'

function App() {
  const questions = useQuestionStore((state) => state.questions)

  // Opción alternativa (funciona igual en este caso)
  const hasQuestions: boolean = questions.length > 0
  const allQuestionsAnswered: boolean = hasQuestions
    ? questions.every((question) => question.selectedAnswer !== undefined)
    : false

  return (
    <>
      <Header />
      <main className="app">
        <div className="app__heading">
          <JSIcon />
          <h1 className="app__title">JavaScript Quiz</h1>
        </div>

        {/* Si hay preguntas  */}

        {allQuestionsAnswered ? <QuizStats /> : hasQuestions ? <Quiz /> : <StartButton />}

        {/* Si hay preguntas (accionador del juego) muestra el quiz */}
        {/* Si estan todas las preguntas respondidas, mostrar QuizStats */}
        {/* como saber si todas las preguntas estan respondidas */}
      </main>
    </>
  )
}

export default App

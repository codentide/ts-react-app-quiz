import { Header, Quiz, QuizStats, ResetQuizButton, StartButton } from './components'
import { useQuestionStore } from './stores/question.store'

function MainContent() {
  const questions = useQuestionStore((state) => state.questions)
  const isLoading = useQuestionStore((state) => state.isLoading)
  const error = useQuestionStore((state) => state.error)

  const hasQuestions: boolean = questions.length > 0
  const allQuestionsAnswered: boolean = hasQuestions
    ? questions.every((question) => question.selectedAnswer !== undefined)
    : false

  if (error)
    return (
      <>
        <span className="error-message">{error}</span>
        <ResetQuizButton children="Try Again" />
      </>
    )
  if (isLoading) return <span>Loading...</span>

  if (allQuestionsAnswered) return <QuizStats />
  else if (hasQuestions) return <Quiz />
  else return <StartButton />
}

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <h1 className="app__title">Quiz Challenge</h1>

        <MainContent />
      </main>
    </>
  )
}

export default App

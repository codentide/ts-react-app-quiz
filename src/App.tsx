import { Header } from './components/Header'
import { Quiz } from './components/Quiz'
import { StartButton } from './components/StartButton'
import { useQuestionStore } from './store/question'
import JSIcon from './assets/svg/javascript.svg?react'

function App() {
  const questions = useQuestionStore((state) => state.questions)

  console.log(questions)
  return (
    <>
      <Header />
      <main className="app">
        <div className="app__heading">
          <JSIcon />
          <h1 className="app__title">JavaScript Quiz</h1>
        </div>

        {questions.length > 0 ? <Quiz /> : <StartButton />}
      </main>
    </>
  )
}

export default App

import { useQuestionStore } from '../store/question'
import { Nav } from './Nav'
import { Question } from './Question'

export const Quiz = () => {
  const currentQuestionIndex = useQuestionStore((state) => state.currentQuestionIndex)
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = questions[currentQuestionIndex]

  return (
    <article className="quiz">
      <Nav />
      <Question {...currentQuestion} />
    </article>
  )
}

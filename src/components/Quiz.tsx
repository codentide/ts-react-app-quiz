import { useQuestionStore } from '../store/question'
import { QuizNav } from './QuizNav'
import { Question } from './Question'
import { QuizFooter } from './QuizFooter'

export const Quiz = () => {
  const currentQuestionIndex = useQuestionStore((state) => state.currentQuestionIndex)
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = questions[currentQuestionIndex]

  return (
    <article className="quiz">
      <QuizNav />
      <Question {...currentQuestion} />
      <QuizFooter />
    </article>
  )
}

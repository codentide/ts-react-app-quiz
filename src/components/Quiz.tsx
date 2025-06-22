import { useQuestionStore } from '../stores/question.store'
import { Question } from './Question'
import { QuizFooter } from './QuizFooter'

export const Quiz = () => {
  const currentQuestionIndex = useQuestionStore((state) => state.currentQuestionIndex)
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = questions[currentQuestionIndex]

  return (
    <article className="quiz">
      <Question {...currentQuestion} />
      <QuizFooter />
      {/* <QuizNav /> */}
    </article>
  )
}

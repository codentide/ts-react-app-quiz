import { useQuizResult } from '../hooks/useQuizResult'
import { ResetQuizButton } from './QuizFooter'

export const QuizStats = () => {
  const { correct: correctCount, incorrect: incorrectCount, message } = useQuizResult()

  return (
    <div className="quiz-stats">
      <h2 className="quiz-stats__title">{message}</h2>
      <ul className="quiz-stats__list">
        <li>
          <p>
            Correct answers: <b>{correctCount}</b>
          </p>
        </li>
        <li>
          <p>
            Incorrect answers: <b>{incorrectCount}</b>
          </p>
        </li>
      </ul>
      <ResetQuizButton children="Reset" />
    </div>
  )
}

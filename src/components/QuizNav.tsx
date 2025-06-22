import { useQuestionStore } from '../stores/question.store'
import LeftArrowIcon from '../assets/svg/arrow-left.svg?react'
import RightArrowIcon from '../assets/svg/arrow-right.svg?react'

export const QuizNav = () => {
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const goPrevQuestion = useQuestionStore((state) => state.goPrevQuestion)

  const currentQuestionIndex = useQuestionStore((state) => state.currentQuestionIndex)
  const questions = useQuestionStore((state) => state.questions)
  const isQuestionAnswered = questions[currentQuestionIndex].selectedAnswer != null

  return (
    <div className="quiz-nav">
      <button className="quiz-nav__button" onClick={goPrevQuestion} disabled={currentQuestionIndex === 0}>
        <LeftArrowIcon />
      </button>
      <span className="quiz-nav__visor"> {currentQuestionIndex + 1 + '/' + questions.length}</span>
      <button
        className="quiz-nav__button"
        onClick={goNextQuestion}
        disabled={currentQuestionIndex + 1 === questions.length || !isQuestionAnswered}
      >
        <RightArrowIcon />
      </button>
    </div>
  )
}

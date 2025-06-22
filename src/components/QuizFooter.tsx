import { useQuestionStore } from '../store/question'

export const QuizFooter = () => {
  return (
    <div className="quiz-footer">
      <ResetQuizButton children="Reset game" />
    </div>
  )
}

export const ResetQuizButton = ({ children }: { children: React.ReactNode }) => {
  const resetQuiz = useQuestionStore((state) => state.resetQuestions)

  return (
    <button className="reset-quiz-button" onClick={resetQuiz}>
      {children}
    </button>
  )
}

import { useQuestionStore } from '../stores/question.store'

export const StartButton = () => {
  const getQuestions = useQuestionStore((state) => state.getQuestions)

  return (
    <button className="start-button" onClick={() => getQuestions(10)}>
      Start
    </button>
  )
}

import { useQuestionStore } from '../stores/question.store'

export const useQuizResult = (): { correct: number; incorrect: number; message: string } => {
  const questions = useQuestionStore((state) => state.questions)

  let correct = 0
  let incorrect = 0

  questions.forEach((question) => {
    if (question.selectedAnswer === question.correctAnswer) correct++
    else incorrect++
  })

  const message =
    correct > (correct + incorrect) / 2 ? 'Excellent performance! You aced it' : 'Good effort! Keep practicing'

  return { correct, incorrect, message }
}

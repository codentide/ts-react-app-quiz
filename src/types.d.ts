export interface Question {
  id: number
  question: string
  code: string
  answers: string[]
  selectedAnswer?: number // índice en el array de answers
  selectedIsCorrectAnswer?: boolean
  correctAnswer: number // índice en el array de answers
}

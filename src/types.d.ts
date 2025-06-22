export interface Question {
  id: string
  question: string
  code: string
  answers: string[]
  selectedAnswer?: number // índice en el array de answers
  selectedIsCorrectAnswer?: boolean
  correctAnswer: number // índice en el array de answers
}

export interface ApiQuestion {
  type: 'multiple' | 'boolean'
  difficulty: "easy | 'medium' | 'hard"
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

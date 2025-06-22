export interface Question {
  id: string
  question: string
  answers: string[]
  correctAnswer: number
  selectedIsCorrectAnswer?: boolean
  selectedAnswer?: number
  code?: string
}

export interface ApiQuestion {
  type: 'multiple' | 'boolean'
  difficulty: "easy | 'medium' | 'hard"
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

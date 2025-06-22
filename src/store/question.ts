import { persist } from 'zustand/middleware'
import type { Question } from '../types'
import { create } from 'zustand'

const BASE_URL = import.meta.env.VITE_BASE_URL

interface State {
  currentQuestionIndex: number
  questions: Question[]
  getQuestions: (limit: number) => void
  selectAnswer: (index: number) => void
  goNextQuestion: () => void
  goPrevQuestion: () => void
}

export const useQuestionStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestionIndex: 0,
      getQuestions: async (limit: number) => {
        const response = await fetch(BASE_URL + '/questions.json')
        const data = await response.json()
        const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
        set({ questions })
      },
      selectAnswer: (index: number) => {
        const { questions, currentQuestionIndex } = get()
        const newQuestions = structuredClone(questions)
        const currentQuestion = newQuestions[currentQuestionIndex]
        const correctAnswer = currentQuestion.correctAnswer

        newQuestions[currentQuestionIndex] = {
          ...currentQuestion,
          selectedAnswer: index,
          selectedIsCorrectAnswer: index === correctAnswer,
        }

        set({ questions: newQuestions })
      },
      goNextQuestion: () => {
        const { currentQuestionIndex, questions } = get()
        const nextQuestion = currentQuestionIndex + 1

        if (nextQuestion < questions.length) {
          set({ currentQuestionIndex: nextQuestion })
        }
      },
      goPrevQuestion: () => {
        const { currentQuestionIndex } = get()
        const prevQuestion = currentQuestionIndex - 1

        if (prevQuestion >= 0) {
          set({ currentQuestionIndex: prevQuestion })
        }
      },
    }),
    { name: 'questions' }
  )
)

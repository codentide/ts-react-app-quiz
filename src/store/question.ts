import { persist } from 'zustand/middleware'
import type { Question } from '../types'
import { create } from 'zustand'
import { getQuestionsFromApi } from '../services/questions'

interface State {
  currentQuestionIndex: number
  questions: Question[]
  isLoading: boolean
  error: string | null
  getQuestions: (limit: number) => Promise<void>
  selectAnswer: (index: number) => void
  goNextQuestion: () => void
  goPrevQuestion: () => void
  resetQuestions: () => void
}

export const useQuestionStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      isLoading: false,
      error: null,
      currentQuestionIndex: 0,

      getQuestions: async (limit: number) => {
        set({ isLoading: true, error: null })
        try {
          const questions = await getQuestionsFromApi(limit)
          set({ questions })
        } catch (error) {
          console.error('Failed to fetch questions: ', error)
          set({ questions: [], error: 'Oops! an error occurred while fetching up the questions, check the logs.' })
        } finally {
          set({ isLoading: false })
        }
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

      resetQuestions: () => set({ questions: [], currentQuestionIndex: 0, error: null }),
    }),
    { name: 'questions' }
  )
)

import type { Question } from '../types'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getQuestionsFromApi = async (limit: number): Promise<Question[]> => {
  try {
    const response = await fetch(BASE_URL + '/questions.json')
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
    return questions
  } catch (error) {
    console.error('Error al cargar las preguntas desde la API:', error)
    throw error
  }
}

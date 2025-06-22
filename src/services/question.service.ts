import type { ApiQuestion } from '../types'

// https://opentdb.com/api.php
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getQuestionsFromApi = async (limit: number): Promise<ApiQuestion[]> => {
  try {
    // difficulty puede ser dado por el usuario
    const response = await fetch(`${BASE_URL}?difficulty=easy&amount=${limit}`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    // Por la api que usamos ya vienen sorteadas
    // const questions = data.results.sort(() => Math.random() - 0.5).slice(0, limit)
    return data.results
  } catch (error) {
    console.error('Error al cargar las preguntas desde la API:', error)
    throw error
  }
}

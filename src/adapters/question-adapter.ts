import type { ApiQuestion, Question } from '../types'
import { v4 as uuidv4 } from 'uuid'

export function adaptQuestion({ question, correct_answer, incorrect_answers }: ApiQuestion): Question {
  const answers: string[] = [...incorrect_answers, correct_answer]
  // Shuffle aray
  const shuffledAnswers = shuffle(answers)
  // Get correct answer index
  const correctAnswerIndex = shuffledAnswers.findIndex((answer) => answer === correct_answer)
  // deconde shuffled array
  const decodedAnswers = shuffledAnswers.map((answer) => decodeHtmlEntities(answer))

  return {
    id: uuidv4(),
    question: decodeHtmlEntities(question),
    answers: decodedAnswers,
    correctAnswer: correctAnswerIndex,
  }
}

export function adaptQuestionArray(apiQuestionArray: ApiQuestion[]): Question[] {
  return apiQuestionArray.map((apiQuestion) => adaptQuestion(apiQuestion))
}

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
function decodeHtmlEntities(htmlString: string): string {
  const div = document.createElement('div')
  div.innerHTML = htmlString
  return div.textContent as string
}

/* 
{
"type": "multiple",
"difficulty": "medium",
"category": "Entertainment: Music",
"question": "Which genre of Hip Hop does MC Frontalot rap?",
"correct_answer": "Nerdcore",
"incorrect_answers": [
"Horrorcore",
"Christian",
"Crunk"
]
},


*/

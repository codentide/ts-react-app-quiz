import type { Question as QuestionType } from '../types'
import { useQuestionStore } from '../store/question'
import { Code } from './Code'

export const Question: React.FunctionComponent<QuestionType> = ({
  question,
  code,
  answers,
  correctAnswer,
  selectedAnswer,
}) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)

  // Ahondar en este tipo de funciones
  const createSelectAnswer = (answerIndex: number) => () => {
    selectAnswer(answerIndex)
  }

  // Retorna una clase que distingue visualmente la respuesta correcta e incorrecta
  const getAnswerClassName = (index: number) => {
    if (selectedAnswer == null) return null
    if (index === correctAnswer) return 'correct'
    if (index !== correctAnswer && index === selectedAnswer) return 'incorrect'

    return null
  }

  return (
    <section className="question">
      <div className="question__question">
        <p>{question}</p>
        {code && <Code>{code}</Code>}
      </div>

      <ul className="answer-list">
        {answers.map((answer, index) => {
          const className = `answer-list__button ${getAnswerClassName(index)}`

          return (
            <li key={index}>
              <button className={className} onClick={createSelectAnswer(index)} disabled={selectedAnswer != null}>
                {answer}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

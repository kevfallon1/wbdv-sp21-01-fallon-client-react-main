import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import QuestionService from "../../services/question-service"
import QuizService from '../../services/quiz-service'

const Quiz = () => {
  const {courseId, quizId} = useParams();
  const [questions, setQuestions] = useState([]);
  const [quizAttempts, setQuizAttempts] = useState([])
  useEffect(() => {
    QuestionService.findQuestionsForQuiz(quizId)
      .then(response => setQuestions(response))

    QuizService.getQuizAttempts(quizId)
      .then(response => setQuizAttempts(response))
  },[])


  const updateQuestion = (questionId, question, answer) => setQuestions(prevState => {
    const newQuestion = {
      _id: question._id,
      title: question.title,
      question: question.question,
      correct: question.correct,
      answer: answer,
      type: question.type,
      choices: question.choices
    }


    return prevState.map(currentQuestion => {
      if(currentQuestion._id === questionId) {
        console.log("UPDATED")
        return newQuestion
      } else {
        return currentQuestion
      }
    })

    console.log(questions)
  })

  const submitAttempt = () =>
    QuizService.submitQuiz(quizId, questions)
      .then(response => setQuizAttempts(prevState => [...prevState, response]))

  console.log(questions)
  return(
      <div>
        <h2>Quiz {quizId}</h2>
        <ul>
          {
            questions && questions.map(question => {
              if(question.type == "TRUE_FALSE") {
                return(
                    <div>
                      <h3>{question.question}</h3>
                      <ul className="list-group">

                        <li className="list-group-item"><label><input
                            type="radio"
                            onClick={() => updateQuestion(question._id, question,"true")}
                            name={question._id}/>True</label></li>


                        <li className="list-group-item">
                          <label><input
                              type="radio"
                              onClick={() => updateQuestion(question._id, question,"false")}
                              name={question._id}/>False</label>
                        </li>

                      </ul>
                    </div>
                )
              } else if(question.type  == "MULTIPLE_CHOICE") {

                  return (
                      <div>
                        <h4>{question.question}</h4>
                        {question.choices.map(choice =>
                            <li className="list-group-item">
                              <label>
                                <input
                                    onClick={() => updateQuestion(question._id, question, choice)}
                                    type="radio" name={question._id}/>
                                {choice}
                              </label></li>)}
                      </div>

                  )




              }
            }

            )
          }
        </ul>


        <div>
          <button
              onClick={submitAttempt}
              className="btn btn-primary">Submit</button>
        </div>
        <br/>
        <h3>Previous attempts</h3>
        <ul className="list-group">
          {
            quizAttempts.map(attempt =>
              <li className="list-group-item">{attempt.score}</li>)
          }
        </ul>
      </div>
  );
}

export default Quiz;
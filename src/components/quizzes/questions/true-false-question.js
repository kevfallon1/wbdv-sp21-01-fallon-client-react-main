import React, {useState} from "react";

const TrueFalseQuestion = ({question}, setQuestions) => {
  const [answer, setAnswer] = useState(null)
  const [graded, setGraded] = useState(false)




  return (
      <div>
        <h4>
          {question.question}
          {
            JSON.stringify(answer) == question.correct && graded &&
            <i className="fas fa-check"></i>
          }
          {
            JSON.stringify(answer) != question.correct && graded &&
            <i className="fas fa-times"></i>
          }
        </h4>
        { graded &&
          <div> Your answer: {JSON.stringify(answer)}</div>
        }


        <ul className="list-group">

          <li className="list-group-item"><label><input
              type="radio"
              onClick={() => {
                const newQuestion = question
                newQuestion.answer = true

              }}
              name={question._id}/>True</label></li>


            <li className="list-group-item">
            <label><input
            type="radio"
            onClick={() => {
              const newQuestion = question
              newQuestion.answer = false

            }}
            name={question._id}/>False</label>
            </li>

        </ul>

      </div>
  )
}



export default TrueFalseQuestion;
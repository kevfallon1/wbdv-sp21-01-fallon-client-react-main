import React, {useState} from "react";


const MultipleChoiceQuestion = ({question}) => {

  const [answer, setAnswer] = useState(null)
  const [graded, setGraded] = useState(false)

  return(
      <div>
        <h4>{question.question}</h4>
        {graded &&
          <div>
            Your answer: {JSON.stringify(answer)}
          </div>
        }
        <ul className="list-group">
        {
          question.choices.map((choice) => {

            if(graded && choice == question.correct) {
              return(
                  <li className="list-group-item list-group-item-success">
                    <label>
                      <input
                          type="radio" name={question._id}/>
                      {choice}
                    </label>
                    <i className="fas fa-check"></i></li>
              )
            } else if(graded && answer == choice && choice != question.correct) {
              return(
                  <li className="list-group-item list-group-item-danger">
                    <label>
                      <input type="radio" name={question._id}/>
                      {choice}
                    </label>
                    <i className="fas fa-times"></i></li>
              )
            } else {
              return (
                  <li className="list-group-item">
                    <label>
                      <input
                          onClick={() => setAnswer(choice)}
                          type="radio" name={question._id}/>
                      {choice}
                    </label></li>
              )
            }
          })
        }
        </ul>
        <div>
          <button onClick={() => setGraded(true)} className="btn btn-primary">Grade</button>
        </div>
      </div>
  )
}

export default MultipleChoiceQuestion;
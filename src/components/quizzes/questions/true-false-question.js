import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
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
          {!graded &&
          <li className="list-group-item"><label><input
              type="radio"
              onClick={() => setAnswer(true)}
              name={question._id}/>True</label></li>

          }
          {!graded &&
            <li className="list-group-item">
            <label><input
            type="radio"
            onClick={() => setAnswer(false)}
            name={question._id}/>False</label>
            </li>
          }
          {
            graded && question.correct == "true" &&
            <li className="list-group-item list-group-item-success"><label><input
                type="radio"
                onClick={() => setAnswer(true)}
                name={question._id} disabled={true}/>True</label>
              <i className="fas fa-check"></i>
            </li>
          }
          {
            graded && question.correct == "true" && JSON.stringify(answer) != question.correct &&
            <li className="list-group-item list-group-item-danger">
              <label><input
                  type="radio"
                  onClick={() => setAnswer(false)}
                  name={question._id} disabled={true}/>False</label>
              <i className="fas fa-times"></i>
            </li>
          }
          {
            graded && question.correct == "true" && JSON.stringify(answer) == question.correct &&
            <li className="list-group-item">
              <label><input
                  type="radio"
                  onClick={() => setAnswer(false)}
                  name={question._id} disabled={true}/>False</label>

            </li>
          }
          {
            graded && question.correct == "false" && JSON.stringify(answer) != question.correct &&
            <li className="list-group-item list-group-item-danger">
              <label><input
                  type="radio"
                  onClick={() => setAnswer(true)}
                  name={question._id} disabled={true}/>True</label>
              <i className="fas fa-times"></i>
            </li>
          }
          {
            graded && question.correct == "false" && JSON.stringify(answer) == question.correct &&
            <li className="list-group-item">
              <label><input
                  type="radio"
                  onClick={() => setAnswer(true)}
                  name={question._id} disabled={true}/>True</label>

            </li>
          }
          {
            graded && question.correct == "false" &&
            <li className="list-group-item list-group-item-success">
              <label><input
                  type="radio"
                  onClick={() => setAnswer(false)}
                  name={question._id} disabled={true}/>False</label>
              <i className="fas fa-check"></i>
            </li>
          }
        </ul>
        <div>
          <button className="btn btn-primary" onClick={() => setGraded(true)}>Grade</button>
        </div>
      </div>
  )
}



export default TrueFalseQuestion;
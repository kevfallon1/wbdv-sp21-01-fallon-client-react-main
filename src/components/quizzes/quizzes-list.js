import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import QuizService from "../../services/quiz-service.js";

const QuizzesList = () => {
  const {courseId} = useParams();
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    QuizService.getAllQuizzes()
      .then(response => setQuizzes(response))
  }, [])
  return(
      <div>
        <h2>Quizzes</h2>
        <div className="list-group">
          {
            quizzes.map((quiz) => {
              return(
                  <Link
                      to={`/courses/${courseId}/quizzes/${quiz._id}`}
                      className="list-group-item">
                    {quiz.title}
                  </Link>
              )
            })
          }
        </div>
      </div>
  )
}

export default QuizzesList;
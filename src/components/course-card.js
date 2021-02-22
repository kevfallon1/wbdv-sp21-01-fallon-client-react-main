import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
      course,
      updateCourse,
      deleteCourse
    }) => {


  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(course.title)
  const saveCourse = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: title
    }
    updateCourse(newCourse)
  }

  return (
      <div className="card course-card" style={{width: "18rem", margin: "15px"}}>
        <div className="card-body">
          {
            !editing &&
            <Link to="/editor">
              {course.title}
            </Link>
          }
          {
            editing &&
            <input
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}/>
          }
          <p className="card-text">Last Modified: {course.lastModified}</p>
          <p className="card-text">Owner: {course.owner}</p>
          <div>
            <i onClick={() => deleteCourse(course)} className="fas fa-2x fa-trash"></i>
            {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

            {
              editing &&
              <i onClick={() => saveCourse()} className="fas fa-2x fa-check"></i>
            }

            {
              !editing &&
              <i onClick={() => setEditing(true)} className="fas fa-2x fa-edit"></i>
            }
          </div>





        </div>
      </div>
  )
}

export default CourseCard
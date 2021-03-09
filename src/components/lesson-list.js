import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service"

const LessonList = (
    {
      lessons=[],
      createLesson,
      updateLesson,
      deleteLesson,
      findLessonsForModule,
      clearLessons
    }) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    console.log(moduleId)
    if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    } else  {
      clearLessons()
    }
  }, [moduleId])
  return(
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {
            lessons.map(lesson =>
              <li className="nav-item">
                <EditableItem
                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                    item={lesson}
                    deleteItem={deleteLesson}
                    updateItem={updateLesson}/>

              </li>
            )
          }
        </ul>
        <div>
          <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"></i>
        </div>
      </div>
  )
}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
  createLesson: (moduleId) => {
    if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
      lessonService.createLesson(moduleId, {title: 'New Lesson'})
      .then(lesson => dispatch({type: "CREATE_LESSON", lesson: lesson}))
    } else {
      alert("Module must be selected to add lessons")
    }


  },
  updateLesson: (newItem) => {
    lessonService.updateLesson(newItem._id, newItem)
    .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
  },
  deleteLesson: (lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
    .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
  },
  findLessonsForModule: (moduleId) => {
    lessonService.findLessonsForModule(moduleId)
    .then(lessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons: lessons
    }))
  },
  clearLessons: () => {
    dispatch({
      type: "CLEAR_LESSONS",
    })
  }
})

export default connect(stpm, dtpm)(LessonList)



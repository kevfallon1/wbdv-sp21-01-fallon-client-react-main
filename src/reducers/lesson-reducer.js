const initialState = {
  lessons: [

  ]
}

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
    case "DELETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.filter(lesson => {
          if(lesson._id !== action.lessonToDelete._id) {
            return true
          } else {
            return false
          }
        })
      }
    case "UPDATE_LESSON":
      return {
        ...state,
        lessons: state.lessons.map(lesson => {
          if(lesson._id === action.updateLesson._id) {
            return action.updateLesson
          } else {
            return lesson
          }
        })
      }
    case "FIND_LESSONS_FOR_MODULE":
      console.log(action.lessons)
      return {
        ...state,
        lessons: action.lessons
      }
    case "CLEAR_LESSONS":
      return {
        ...state,
        lessons: []
      }
    default:
      return state
  }
}

export default lessonReducer
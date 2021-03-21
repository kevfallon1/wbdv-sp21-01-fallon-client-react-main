import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonList from "./lesson-list";
import topicReducer from "../reducers/topic-reducer";
import TopicList from "./topic-list";
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../reducers/widget-reducer";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
  widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
  const {layout, courseId, moduleId} = useParams();
  return(
      <Provider store={store}>
    <main>

      <section className="editorContainer">

        <div className="row" id="editorHeader">
          <div className="col-sm-9">
            <h1>Course Editor</h1>
          </div>
          <div id="editButtons" class-="col-sm-3 float-right float-bottom">

            <button
                onClick={() => history.goBack()}
                className="myButton">Back
            </button>
            <Link to="/courses/table" className="myButton">
              Exit
            </Link>
            <div>
              <button className="myButton">Save</button>
            </div>

          </div>
        </div>
        <div className="row" id="contentContainer">
          <div className="moduleListContainer col-sm-3">
            <div>
              <ModuleList/>
            </div>


          </div>
          <div id="courseEditModule col-lg-9">

            <nav
                className="navbar navbar-expand-lg navbar-light fancyNavbar row">

              <a className="navbar-brand" href="#">Lessons</a>
              <button className="navbar-toggler" type="button"
                      data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


              <LessonList/>




            </nav>

              <TopicList/>



              <div id="widgetList">

                <WidgetList/>

                  </div>



          </div>
        </div>

      </section>

    </main>
      </Provider>)}

// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
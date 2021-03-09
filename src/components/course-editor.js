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

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
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

                <div className="jumbotron widget">

                  <div className="widgetHeader row">
                    <div>
                      <h3>Heading Widget</h3>
                    </div>

                    <div className="widgetButtonContainer">
                      <div>
                        <select className="form-control widgetTypeSelect">
                          <option>Heading</option>
                          <option>Body</option>
                        </select>
                      </div>
                      <div>
                        <button className="btn btn-primary widgetButton">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16"
                               height="16" fill="currentColor"
                               className="bi bi-caret-up-square-fill"
                               viewBox="0 0 16 16">
                            <path
                                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z"/>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-primary widgetButton">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16"
                               height="16" fill="currentColor"
                               className="bi bi-caret-down-square-fill"
                               viewBox="0 0 16 16">
                            <path
                                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-danger widgetButton">Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input className="form-control" placeholder="Heading Text"/>
                  </div>
                </div>

                <div className="jumbotron widget">

                  <div className="widgetHeader row">
                    <div>
                      <h3>Body Widget</h3>
                    </div>

                    <div className="widgetButtonContainer">
                      <select className="form-control widgetTypeSelect">
                        <option>Body</option>
                        <option>Heading</option>
                      </select>
                      <button className="btn btn-primary widgetButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                             height="16" fill="currentColor"
                             className="bi bi-caret-up-square-fill"
                             viewBox="0 0 16 16">
                          <path
                              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z"/>
                        </svg>
                      </button>
                      <button className="btn btn-primary widgetButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                             height="16" fill="currentColor"
                             className="bi bi-caret-down-square-fill"
                             viewBox="0 0 16 16">
                          <path
                              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
                        </svg>
                      </button>

                      <button className="btn btn-danger widgetButton">Delete
                      </button>
                    </div>
                  </div>
                  <div>
                    <textarea className="form-control"
                              placeholder="Body Text"></textarea>
                  </div>
                </div>


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
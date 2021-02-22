import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
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
          <div className="moduleListContainer col-lg-3">

            <div className="link">
              <h2>Module 1: Stuff</h2>
            </div>
            <div className="link">
              <h2>
                Module 2
              </h2>
            </div>
            <div className="link">
              <h2>
                Module 3
              </h2>
            </div>
            <div className="link">
              <h2>
                Module 4
              </h2>
            </div>
            <div className="addModuleButtonContainer"
                 className="align-self-end">
              <a className="myButton">Add</a>
              <a className="myButton">Delete</a>
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
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Lesson 1 <i
                        className="fa fa-trash"></i><span
                        className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Lesson 2 <i
                        className="fa fa-trash"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Lesson 3 <i
                        className="fa fa-trash"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Lesson 4 <i
                        className="fa fa-trash"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">+</a>
                  </li>
                </ul>
              </div>
            </nav>

              <div className="topics">
                <ul className="float-right nav nav-pills row">
                  <li className="nav-item">
                    <a className="nav-link" href="#">+</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Topic 3 <i
                        className="fa fa-trash"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Topic 2 <i
                        className="fa fa-trash"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Topic 1 <i
                        className="fa fa-trash"></i></a>
                  </li>
                </ul>
              </div>



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

// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
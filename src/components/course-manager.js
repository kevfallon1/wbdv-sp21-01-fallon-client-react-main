import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";

export default class CourseManager
  extends React.Component {
  state = {
    courses: [],
    newCourseName: ''
  }

  componentDidMount() {
    courseService.findAllCourses()
        .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
  }

  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
        .then(status => {
            this.setState((prevState) => {
                let nextState = {...prevState}
                nextState.courses = prevState.courses.map(c => {
                    if(c._id === course._id) {
                        return course
                    } else {
                        return c
                    }
                })
                return nextState
            })
        })
  }

  deleteCourse = (course) => {
    // alert("delete course " + course._id)
    courseService.deleteCourse(course._id)
        .then(status => {
          // this.setState({
          //   courses: this.state.courses.filter(c => c._id !== course._id)
          // })
          this.setState((prevState) => ({
            courses: prevState.courses.filter(c => c._id !== course._id)
          }))
        })
  }

  addCourse = () => {
    // alert('add course')
    if(this.state.newCourseName == '') {
      alert('Course name required')
      return;
    }
    let today = new Date().toISOString().slice(0, 10)
    const newCourse = {
      title: this.state.newCourseName,
      owner: "me",
      lastModified: today
    }
    courseService.createCourse(newCourse)
        .then(actualCourse => {
          this.state.courses.push(actualCourse)
          this.state.newCourseName = ''
          this.setState(this.state)
        })
  }

  render() {
    return(

        <main>
          <div className="indexContainer">
            <div id="indexHeading" className="row">
              <div className="col-lg-9">
                <h1 className="display-4">Course Management System</h1>
              </div>
            </div>
            <div id="">

              <div className="indexTableContainer">
                <div className="row add-course">
                  <input className="form-control col-sm-10"
                         placeholder="New Course Name"
                         value = {this.state.newCourseName}
                          onChange={(e) => this.setState({
                                newCourseName: e.target.value
                              }
                          )}/>
                  <i onClick={this.addCourse}className="fas fa-2x fa-plus-circle col-sm-2"></i>
                </div>
                <Route path="/courses/table" exact={true} >
                  <CourseTable
                      updateCourse={this.updateCourse}
                      deleteCourse={this.deleteCourse}
                      courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true} >
                  <CourseGrid
                      courses={this.state.courses}
                      updateCourse={this.updateCourse}
                      deleteCourse={this.deleteCourse}
                  />
                </Route>
                <i onClick={this.addCourse}className="fas fa-2x float-right fa-plus-circle col-sm-2"></i>

              </div>


            </div>


          </div>
        </main>
    )
  }
}
// export default CourseManager

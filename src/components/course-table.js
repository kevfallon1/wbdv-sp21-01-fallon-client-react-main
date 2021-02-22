import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
  React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    return(
      <div>

          <Link to="/courses/grid">
              <i className="fas table-icon fa-th float-right fa-2x"></i>
          </Link>
        <i className="fas table-icon fa-2x float-right fa-folder"></i>
        <i className="fas table-icon fa-2x float-right fa-sort-alpha-up-alt"></i>
        <h2>Course Table</h2>
        <table className="table">
            <thead>
            <th>Course Name</th>
            <th className="d-none d-sm-table-cell">Owned By</th>
            <th className="d-none d-lg-table-cell">Last Modified</th>

            </thead>
            <tbody>

              {
                this.props.courses.map(course =>
                  <CourseRow
                      key={course._id}
                      deleteCourse={this.props.deleteCourse}
                      updateCourse={this.props.updateCourse}
                    course={course}
                    title={course.title}
                    lastModified={course.lastModified}
                    owner={course.owner}/>)
              }
            </tbody>
        </table>
      </div>
    )
  }
}

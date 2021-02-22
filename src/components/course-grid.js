import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
        </Link>
      <i className="fas table-icon fa-2x float-right fa-folder"></i>
      <i className="fas table-icon fa-2x float-right fa-sort-alpha-up-alt"></i>
      <h2>Course Grid {courses.length}</h2>
        <div className="row">
        {
            courses.map(course =>
                <CourseCard
                    key={course._id}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    course={course}
                />)
        }
        </div>

    </div>

export default CourseGrid

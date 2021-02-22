import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
      <div>
        <h1>Course Management System</h1>
      </div>
      <div className="">
        <Link to="/courses/table" className="btn btn-primary">
          Courses Table
        </Link>
        <Link to="/courses/grid" className="btn btn-primary">
          Courses Grid
        </Link>
        <Link to="/editor" className="btn btn-primary">
          Course Editor
        </Link>
      </div>
    </>
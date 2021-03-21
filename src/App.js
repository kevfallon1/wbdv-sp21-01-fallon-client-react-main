import './App.css';
import CourseManager from "./components/course-manager";
//import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import CourseEditor from "./components/course-editor";
import Home from "./components/home"


function App() {
  return (
      <BrowserRouter>
        <div className="main-container">
          <Route path="/courses/:layout" exact={true} component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          {/*<div className="container-fluid">*/}
          {/*  <CourseManager/>*/}
          {/*  <CourseEditor/>*/}
          {/*</div>*/}
          <Route path="/" exact={true} component={Home}/>

          <Route path={[
            "/courses/:layout/edit/:courseId",
            "/courses/:layout/edit/:courseId/modules/:moduleId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"


          ]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
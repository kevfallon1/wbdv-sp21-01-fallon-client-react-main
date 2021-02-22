import './App.css';
import CourseManager from "./components/course-manager";
//import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import CourseEditor from "./components/course-editor";

function App() {
  return (
      <BrowserRouter>
        <div className="main-container">
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          {/*<div className="container-fluid">*/}
          {/*  <CourseManager/>*/}
          {/*  <CourseEditor/>*/}
          {/*</div>*/}
          <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
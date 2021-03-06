import React, { Component, useState, useEffect } from "react";
import TopBar from "./componenets/topbar/TopBar";
import SideBar from "./componenets/sidebar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import CourseList from "./pages/courselist/CourseList";
import Course from "./pages/course/Course";
import Subject from "./pages/subject/Subject";
import ClassRoom from "./pages/classroom/ClassRoom";
import NotesView from "./pages/notes/notesView/NoteView";
import NotesCreate from "./pages/notes/notesCreate/NotesCreate";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SignIn from "./pages/signin/SignIn";
import Login from "./pages/login/Login";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "./actions/course";
import { getClassRoom } from "./actions/classroom";
import { getProfile } from "./actions/profile";
// import { getSubjects } from "./actions/subject";
import { getNotes } from "./actions/notes";
// import { checkLoggedinInfo } from "./actions/authInfo";
import { checkAdminLoggedInUID } from "./actions/email";
// import { useHistory } from "react-router-dom";

import bootstrap from "bootstrap";
import ReactDOM, {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCourses());
    // dispatch(getProfile());
    dispatch(checkAdminLoggedInUID());
    // dispatch(getClassRoom());
    //  dispatch(getNotes());
  }, [dispatch]);
  // const [courseId,setCourseId] =useState("");
  // const checkLoggedIn = useSelector((state) => state.authInfo);
  // const history = useHistory();
  
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/signin">
          <SignIn />
        </Route>
        <Route exact path="/auth/signin/:encryption">
          <SignIn />
        </Route>
        <Route exact path="/">
          <TopBar />
          <div className="container1">
            <SideBar />
            <Home />
          </div>
        </Route>
        <Route exact path="/users/:role">
          <TopBar />
          <div className="container1">
            <SideBar />
            <UserList />
          </div>
        </Route>
        <Route exact path="/user/:uid">
          <TopBar />
          <div className="container1">
            <SideBar />
            <User />
          </div>
        </Route>
        <Route exact path="/courses">
          <TopBar />
          <div className="container1">
            <SideBar />
            <CourseList getCourseData={"getCourseData"} />
          </div>
        </Route>
        <Route exact path="/course/:courseId">
          <TopBar />
          <div className="container1">
            <SideBar />
            <Course />
          </div>
        </Route>
        <Route exact path="/course">
          <TopBar />
          <div className="container1">
            <SideBar />
            <Course />
          </div>
        </Route>
        <Route exact path="/subject">
          <TopBar />
          <div className="container1">
            <SideBar />
            <Subject />
          </div>
        </Route>
        <Route exact path="/course-subject/:cid">
          <TopBar />
          <div className="container1">
            <SideBar />
            <Subject />
          </div>
        </Route>
        <Route exact path="/classroom/:sid">
          <TopBar />
          <div className="container1">
            <SideBar />
            <ClassRoom />
          </div>
        </Route>
        <Route exact path="/classroom">
          <TopBar />
          <div className="container1">
            <SideBar />
            <ClassRoom />
          </div>
        </Route>
        <Route exact path="/notes">
          <TopBar />
          <div className="container1">
            <SideBar />
            <NotesView />
          </div>
        </Route>
        <Route exact path="/room-notes/:roomId">
          <TopBar />
          <div className="container1">
            <SideBar />
            <NotesView />
          </div>
        </Route>
        <Route exact path="/note">
          <TopBar />
          <div className="container1">
            <SideBar />
            <NotesCreate />
          </div>
        </Route>
        <Route exact path="/note-create/:roomId">
          <TopBar />
          <div className="container1">
            <SideBar />
            <NotesCreate />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

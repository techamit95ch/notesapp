import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Event,
  MailOutline,
  Feedback,
  School,
  SupervisedUserCircle,
  PersonAdd,
  Note,
  ThumbUpAlt,
  RecordVoiceOver,
  PermIdentity,
  MenuBook,
  Class,
  ArrowBack,
  ArrowForward,
} from "@material-ui/icons";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import CachedIcon from "@material-ui/icons/Cached";
// import { browserHistory } from "react-router";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  // console.log(location.pathname);
  const history = useHistory();

  // const navigate = useNavigate();
  // let navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* {" DeashBoard"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Navigation</h3>
          <ul className="sidebarList">
            <Button color="primary" onClick={() => history.goBack()}>
              <ArrowBack />
            </Button>
            <Button onClick={() => history.push(location.pathname)}>
              <CachedIcon />
            </Button>
            <Button color="secondary" onClick={() => history.goForward()}>
              <ArrowForward />
            </Button>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link
              to="/"
              className={
                "sidebarListItem " + location.pathname != "/" ? "" : "active"
              }
            >
              <LineStyle className="sidebarIcon" />
              Home
            </Link>
            {localStorage.getItem("role") === "admin" ? (
              <>
                <Link className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </Link>
                <Link className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  Students Report
                </Link>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        {/* {" DashBoard Close"} */}
        {/* {" Course Menu"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Course Menu</h3>
          <ul className="sidebarList">
            {localStorage.getItem("role") != "student" ? (
              <>
                <Link
                  to="/courses"
                  className={
                    "sidebarListItem " + location.pathname === "/courses" ||
                    location.pathname === "/course/"
                      ? ""
                      : ""
                  }
                >
                  <School className="sidebarIcon" />
                  Courses
                </Link>
              </>
            ) : (
              ""
            )}
            {localStorage.getItem("role") === "admin" ? (
              <>
                <Link to="/subject" className="sidebarListItem ">
                  <MenuBook className="sidebarIcon" />
                  Subject
                </Link>

                <Link to="/notes" className="sidebarListItem ">
                  <Note className="sidebarIcon" />
                  Notes
                </Link>
              </>
            ) : (
              ""
            )}
            {/* {localStorage.getItem("role") == "student" ? ( */}
            <Link to="/classroom" className={"sidebarListItem "}>
              <Class className="sidebarIcon" />
              Class Room
            </Link>
            {/* ) : (
              ""
            )} */}
          </ul>
        </div>
        {/* {" Course Menu Close"} */}
        {/* {" Proffesor Menu"} */}
        {localStorage.getItem("role") === "admin" ? (
          <>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Proffesor Menu</h3>
              <ul className="sidebarList">
                <Link to="/users/professor" className="sidebarListItem ">
                  <RecordVoiceOver className="sidebarIcon" />
                  All Proffesor{" "}
                </Link>
              </ul>
            </div>
            {/* {" Proffesor Menu Close"} */}
            {/* {" Student Menu"} */}
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Student Menu</h3>
              <ul className="sidebarList">
                <Link to="/users/student" className="sidebarListItem ">
                  <PermIdentity className="sidebarIcon" />
                  All Student{" "}
                </Link>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
        {/* {" Student Menu Close"} */}
        {/* {" Quick Menu"} */}
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="#" className="sidebarListItem ">
              <Event className="sidebarIcon" />
              Event details{" "}
            </Link>
            <Link to="/mail" className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Email
            </Link>
            <Link to="#" className="sidebarListItem">
              <ThumbUpAlt className="sidebarIcon" />
              Success Story
            </Link>
            <Link to="/feedback" className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feed Back
            </Link>
          </ul>
        </div> */}
        {/* {" Quick Menu Close"} */}
      </div>
    </div>
  );
}

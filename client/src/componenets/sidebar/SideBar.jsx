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
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* {" DeashBoard"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </Link>
            <Link className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </Link>
            <Link className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Students Report
            </Link>
          </ul>
        </div>
        {/* {" DashBoard Close"} */}
        {/* {" Course Menu"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Course Menu</h3>
          <ul className="sidebarList">
            <Link to="/courses" className="sidebarListItem ">
              <School className="sidebarIcon" />
              Courses
            </Link>
            <Link to="/subject" className="sidebarListItem ">
              <MenuBook className="sidebarIcon" />
              Subject
            </Link>
            <Link to="/classroom" className="sidebarListItem ">
              <Class className="sidebarIcon" />
              Class Room
            </Link>

            <Link to="/notes" className="sidebarListItem ">
              <Note className="sidebarIcon" />
              Notes
            </Link>
          </ul>
        </div>
        {/* {" Course Menu Close"} */}
        {/* {" Proffesor Menu"} */}
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
        {/* {" Student Menu Close"} */}
        {/* {" Quick Menu"} */}
        <div className="sidebarMenu">
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
        </div>
        {/* {" Quick Menu Close"} */}
      </div>
    </div>
  );
}

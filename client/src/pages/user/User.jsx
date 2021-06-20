import React from "react";
import "./user.css";
import UserShow from "./usershow/UserShow";
import UserCreate from "./userCreate/UserCreate";

export default function User(props) {
  return (
    <div className="user">
      <h5>{"User Page Title"}</h5>
      <div className="userContainer">
        <UserShow />
        <UserCreate />
      </div>
    </div>
  );
}

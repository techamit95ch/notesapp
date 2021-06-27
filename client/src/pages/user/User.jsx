import React from "react";
import "./user.css";
import UserShow from "./usershow/UserShow";
import UserCreate from "./userCreate/UserCreate";
import { useSelector, useDispatch } from "react-redux";


export default function User(props) {
  const profile = useSelector((state) => state.profile);
  return (
    <div className="user">
      <h5>{"User Page Title"}</h5>
      <div className="userContainer">
        <UserShow profile={profile} />
        <UserCreate profile ={profile}/>
      </div>
    </div>
  );
}

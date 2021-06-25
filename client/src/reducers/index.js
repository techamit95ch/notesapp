import {combineReducers } from 'redux';
import email from "./email";
import course from "./course.js";
import subject from "./subject.js";
import authInfo from "./authInfo.js";
import profile from "./profile.js";
import classrooms from "./classroom.js";

export default combineReducers({
  email,
  course,
  subject,
  authInfo,
  profile,
  classrooms,
});

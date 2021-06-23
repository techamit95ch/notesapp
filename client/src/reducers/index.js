import {combineReducers } from 'redux';
import email from "./email";
import course from "./course.js";
import subject from "./subject.js";

export default combineReducers({
  email,
  course,
  subject,
});

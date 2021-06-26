import { combineReducers } from "redux";
import email from "./email";
import course from "./course.js";
import subjects from "./subject.js";
import authInfo from "./authInfo.js";
import profile from "./profile.js";
import classrooms from "./classroom.js";
import notes from "./notes.js";
import sigleNote from "./single_note.js";

export default combineReducers({
  email,
  course,
  subjects,
  authInfo,
  profile,
  classrooms,
  notes,
  sigleNote,
});

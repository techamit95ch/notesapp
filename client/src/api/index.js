import axios from "axios";
const mainUrl = "http://localhost:2973/";

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);

const verifyMail = mainUrl + "verifyMail";
const courseUrl = mainUrl + "course";
const subjectUrl = mainUrl + "subject";
const emailUrl = mainUrl + "email";
const authCreateUrl = mainUrl + "auth/create";
const authLoginUrl = mainUrl + "auth/login";
const checkLoggedInUrl = mainUrl + "auth/check-login";
const profileUrl = mainUrl + "profile";
const classUrl = mainUrl + "class";
const noteUrl = mainUrl + "note";

export const createCourse = (newCousre) => axios.post(courseUrl, newCousre);
export const fetchCourses = () => axios.get("http://localhost:2973/course");
export const createSubject = (newSubject) => axios.post(subjectUrl, newSubject);
export const getAllSubjects = () => axios.get(subjectUrl);
export const fetchSubjects = (id) =>
  axios.get(`http://localhost:2973/subject/${id}`);
export const createEmail = (newEmail) => axios.post(emailUrl, newEmail);

export const createProfile = (data) => axios.post(profileUrl, data);
export const getProfile = (data) => axios.post(profileUrl + "/get", data);
export const createTextProfile = (data) =>
  axios.post(profileUrl + "/create", data);

export const matchUID = (uid) => axios.get(emailUrl + "/" + uid);
// export const fetchSubjects = (id) => axios.get("http://localhost:2973/subject/231");
export const sendMail = (newMail) => axios.post(verifyMail, newMail);
export const authCreate = (data) => axios.post(authCreateUrl, data);
export const authLogin = (data) => axios.post(authLoginUrl, data);
export const checkLoggedIn = (data) => axios.post(checkLoggedInUrl, data);

export const createClassRoom = (data) => axios.post(classUrl, data);
export const joinRoom = (data) => axios.post(classUrl + "/join ", data);

export const getClassRoom = (data) => axios.post(classUrl + "/getRooms", data);
export const getSubjectRooms = (data) =>
  axios.post(classUrl + "/getSubjectRooms", data);
export const getUnjoinedRoom = (data) =>
  axios.post(classUrl + "/unjoinedRooms", data);

export const createFileNote = (data) => axios.post(noteUrl + "/file", data);
export const noteTextCreate = (data) => axios.post(noteUrl + "/text", data);
export const getNotes = (data) => axios.post(noteUrl, data);
export const blockNotes = (_id) => axios.get(noteUrl + "/block/" + _id);
// export const getNotes = () => axios.get("http://localhost:2973/note");
// export const getNote = (data) =>
//   axios.post("http://localhost:2973/note/single", data);
export const getNote = (_id) => axios.get(noteUrl + "/" + _id);
// console.log(noteUrl + "/single");

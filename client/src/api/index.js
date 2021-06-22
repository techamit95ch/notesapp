import axios from "axios";
const mainUrl = "http://localhost:2973/";

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);

const verifyMail = mainUrl + "verifyMail";
const courseUrl = mainUrl + "course";
const subjectUrl = mainUrl + "subject";
export const createCourse = (newCousre) => axios.post(courseUrl, newCousre);
export const fetchCourses=() => axios.get("http://localhost:2973/course");
export const createSubject = (newSubject) => axios.post(subjectUrl, newSubject);
export const fetchSubjects = (id) => axios.get(`http://localhost:2973/subject/${id}`);
// export const fetchSubjects = (id) => axios.get("http://localhost:2973/subject/231");

export const sendMail = (newMail) => axios.post(verifyMail, newMail);

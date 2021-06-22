import axios from "axios";
const mainUrl = "http://localhost:2973/";

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);

const verifyMail = mainUrl + "verifyMail";
const courseUrl = mainUrl + "course";
export const createCourse = (newCousre) => axios.post(courseUrl, newCousre);
export const fetchCourses=() => axios.get("http://localhost:2973/course");
export const fetchCourses2 = axios.create({ baseUrl:courseUrl });

export const sendMail = (newMail) => axios.post(verifyMail, newMail);

import * as api from "../api/index.js";

// export const getCourses = () => async (dispatch) => {
export const getSubjects = (cid) => async (dispatch) => {
  try {
    // console.log("--------------- Get Subjects ---------------");
    // console.log("---------------"+ cid+" ---------------");
    const { data } = await api.fetchSubjects(cid);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// getAllSubjects
export const getAllSubjects = () => async (dispatch) => {
  try {
    // console.log("---------------"+ cid+" ---------------");
    const { data } = await api.getAllSubjects();
    console.log("--------------- Get All Subjects ---------------");
    console.log({ type: "FETCH_ALL", payload: data });
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createSubject = async (post) => {
  try {
    const { data } = await api.createSubject(post);
  } catch (error) {
    console.log("-------------From Action Subject ---------");
    console.log(post);

    console.log({ message: error.message });
  }
};
// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);
//
//     // console.log(data);
//     dispatch({ type: "UPDATE", payload: data });
//   } catch (e) {
//     console.log({ message: e.message });
//   } finally {
//   }
// };

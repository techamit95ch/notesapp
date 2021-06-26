import * as api from "../api/index.js";

// export const getCourses = () => async (dispatch) => {
export const getCourses = () => async (dispatch) => {
  try {
    // console.log("-------------From Action Course (getCourses)---------");
    const { data } = await api.fetchCourses();
    dispatch({ type: "FETCH_ALL_COURSES", payload: data });
  } catch (error) {
    console.log("-------------Error From Action Course (getCourses)---------");
    console.log(error.message);
  }
};
export const createCourse = async (post) => {
  try {
    const { data } = await api.createCourse(post);
    console.log("-------------From Action Course ---------");
    console.log(data);
    console.log("-------------------------------");
    // dispatch({ type: "CREATE_COURSE", payload: data });
  } catch (error) {
    console.log("-------------From Action Course ---------");
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

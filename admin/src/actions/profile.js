// import  api from "../api/index.js";

// export const getCourses = () => async (dispatch) => {
// export const AllProfile = () => async (dispatch) => {
//   try {
//     const { data } = await api.AllProfile();
//     dispatch({ type: "FETCH_PROFILE", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// export const getProfile = () => async (dispatch) => {
//   try {
//     console.log("-------------From Action Course (getCourses)---------");

//     const { data } = await api.getProfile({
//       agent: localStorage.getItem("agent"),
//     });
//     dispatch({ type: "FETCH_PROFILE", payload: data });
//   } catch (error) {
//     console.log("-------------Error From Action Course (getCourses)---------");
//     console.log(error.message);
//   }
// };
// export const createProfile = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createProfile(post);
//     console.log("-------------From Action Course ---------");
//     console.log(data);
//     console.log("-------------------------------");
//     dispatch({ type: "CREATE", payload: data });
//     localStorage.removeItem("newSignedIn");
//   } catch (error) {
//     console.log("-------------From Action Course ---------");
//     console.log(post);

//     console.log({ message: error.message });
//   }
// };
// export const createTextProfile = (post) => async (dispatch) => {
//   try {
//     post.agent = localStorage.getItem("agent");
//     const { data } = await api.createTextProfile(post);
//     console.log("-------------From Action Course ---------");
//     console.log(data);
//     console.log("-------------------------------");
//     dispatch({ type: "CREATE", payload: data });
//     if (data.status === true) window.alert("Profile Created Successfully");
//     localStorage.removeItem("newSignedIn");
//   } catch (error) {
//     console.log("-------------From Action Course ---------");
//     console.log(post);

//     console.log({ message: error.message });
//   }
// };
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

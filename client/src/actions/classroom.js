import * as api from "../api/index.js";
export const createRoom = (post) => async (dispatch) => {
  try {
    post.agent = localStorage.getItem("agent");
    // post.role= localStorage.getItem("role");
    const { data } = await api.createClassRoom(post);

    localStorage.setItem("room", post.roomNumber);
    localStorage.setItem("role", data.role);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const joinRoom = (post) => async (dispatch) => {
  try {
    post.agent = localStorage.getItem("agent");
    // post.role= localStorage.getItem("role");
    const { data } = await api.joinRoom(post);

    // localStorage.setItem("room", post.roomNumber);
    // localStorage.setItem("role", data.role);
    dispatch({ type: "JOIN", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
// getClassRoom;
export const getClassRoom = () => async (dispatch) => {
  try {
    const { data } = await api.getClassRoom({
      agent: localStorage.getItem("agent"),
    });
    // console.log({ type: "FETCH", payload: data });
    dispatch({ type: "FETCHCLASS", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const getSubjectRooms = (post) => async (dispatch) => {
  try {
    post.agent = localStorage.getItem("agent");
    console.log(post);
    const { data } = await api.getSubjectRooms(post);
    // console.log({ type: "FETCH", payload: data });
    dispatch({ type: "FETCHCLASS", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const getUnjoinedRoom = () => async (dispatch) => {
  try {
    console.log("from unjoinedRooms");
    const { data } = await api.getUnjoinedRoom({
      agent: localStorage.getItem("agent"),
    });
    console.log({ type: "FETCH_UNJ_ALL", payload: data });
    dispatch({ type: "FETCH_UNJ_ALL", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

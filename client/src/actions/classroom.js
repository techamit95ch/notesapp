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

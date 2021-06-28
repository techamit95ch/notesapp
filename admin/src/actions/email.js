import * as api from "../api";
export const matchUID = (uid) => async (dispatch) => {
  try {
    // console.log(uid);
    const { data } = await api.matchUID(uid);
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const createEmail = async (post) => {
  try {
    const { data } = await api.createEmail(post);
    console.log(data);
    // dispatch({ type: "CREATE_COURSE", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

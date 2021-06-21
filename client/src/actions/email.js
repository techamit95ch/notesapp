import * as api from "../api";
export const sendMail = (post) => async (dispatch) => {
    try {
      const { data } = await api.sendMail(post);
      dispatch({ type: "verifyUser", payload: data });
    } catch (error) {
      console.log({ message: error.message });
    }
  };
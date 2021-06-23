import * as api from "../api";
export const sendMail = (post) => async (dispatch) => {
    try {
      const { data } = await api.sendMail(post);
      dispatch({ type: "verifyUser", payload: data });
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
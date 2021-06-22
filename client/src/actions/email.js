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
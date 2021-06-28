import * as api from "../api";
export const matchUID = async (uid) => {
  try {
    console.log(uid);
    const { data } = await api.matchAdminUID(uid);
    // console.log(data);
    localStorage.clear();
    if (data.result === true) {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("uid", data.uid);
      localStorage.setItem("role", "admin");
      window.location.replace("http://localhost:9361/");

      return true;
      // window.location.replace("http://localhost:8521/");
    } else {
      localStorage.clear();
      return false;
    }
    // dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
// checkAdminLoggedInUID
export const checkAdminLoggedInUID = () => async (dispatch) => {
  try {
    // console.log(uid);
    if (localStorage.getItem("uid") || localStorage.getItem("uid") != null) {
      const { data } = await api.checkAdminLoggedInUID({
        uid: localStorage.getItem("uid"),
      });
      if (data.result === true) {
        localStorage.setItem("isLogin", true);
        localStorage.setItem("uid", data.uid);
        localStorage.setItem("role", "admin");
        dispatch({
          type: "FETCH_ADMIN_AUTH",
          payload: { loggedIn: true, login: true },
        });
      } else {
        localStorage.clear();
        dispatch({
          type: "FETCH_ADMIN_AUTH",
          payload: { loggedIn: false, login: false },
        });
      }
    } else {
      localStorage.clear();
      dispatch({
        type: "FETCH_ADMIN_AUTH",
        payload: { loggedIn: false, login: false },
      });
    }

    // console.log(data);
    // localStorage.clear();
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const createAdminEmail = async (post) => {
  try {
    console.log("From Create Mail", post);
    const { data } = await api.createAdminEmail(post);
    if (data.result === true) {
      window.alert(" Data UPI Given; Check Your Email");
    }
    // console.log(data);
    // dispatch({ type: "CREATE_COURSE", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

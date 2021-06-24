import * as api from "../api";
import { useHistory } from "react-router-dom";

export const matchUID = (uid) => async (dispatch) => {
  try {
    console.log(uid);
    const { data } = await api.matchUID(uid);
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const createAuth = (post) => async (dispatch) => {
  //   const history = useHistory();

  try {
    const { data } = await api.authCreate(post);
    console.log(data.status);
    if (data.status) {
    } else {
      window.location.replace("http://localhost:8521/auth/signin");
    }

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};
export const loginAuth = (post) => async (dispatch) => {
  //   const history = useHistory();
  //   console.log(post);
  try {
    const { data } = await api.authLogin(post);
    localStorage.clear();

    if (data.status) {
      localStorage.setItem("isLogin", data.status);
      localStorage.setItem("agent", data.agent);
      window.location.replace("http://localhost:8521");
    } else {
      console.log(data);
    }

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};
export const checkLoggedin = () => async (dispatch) => {
  try {
    if (localStorage["agent"] && localStorage["isLogin"]) {
      console.log("Logged in");
    }
    // dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

// export const createAuth = (info) => async (dispatch) => {
// // export const createAuth =  async (info) => {
//   try {
//     //   console.log(info);
//     const { data } = await api.authCreate(info);
//     // console.log(data);
//     dispatch({ type: "CREATE", payload: data });
//   } catch (error) {
//     console.log({ message: error.message });
//   }
// };

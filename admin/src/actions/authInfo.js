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
    // console.log(data.status);
    localStorage.clear();
    if (data.status===true ) {
      localStorage.setItem("isLogin", data.status);
      localStorage.setItem("agent", data.agent);
      localStorage.setItem("newSignedIn", true);
      // localStorage.setItem("role", data.role);
      window.location.replace("http://localhost:8521/");
    } else {
      // window.location.replace("http://localhost:8521/");
       console.log(data);
    }

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};
export const loginAuth = (post) => async (dispatch) => {
  //   const history = useHistory();

  try {
    const { data } = await api.authLogin(post);
    localStorage.clear();
console.log(data);
    if (data.isLogin === "true" && data.status === true) {
      localStorage.setItem("isLogin", data.status);
      localStorage.setItem("agent", data.agent);
      localStorage.setItem("role", data.role);
      // console.log(data);
      window.location.replace("http://localhost:8521");
    } else {
      console.log(data);
    }

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};
export const checkLoggedinInfo = () => async (dispatch) => {
  try {
    if (
      localStorage["agent"] &&
      localStorage["isLogin"] &&
      localStorage.getItem("newSignedIn") == null
    ) {
      const { data } = await api.checkLoggedIn({
        agent: localStorage["agent"],
        isLogin: localStorage["isLogin"],
      });
      dispatch({ type: "FETCH_AUTH", payload: data });
    } else if (localStorage.getItem("newSignedIn") === true) {
       const { data } = await api.checkLoggedIn({
         agent: localStorage["agent"],
         isLogin: localStorage["isLogin"],
       });
    } else {
      localStorage.clear();
      dispatch({ type: "FETCH_AUTH", payload: { login: false } });
      //  window.location.replace("http://localhost:8521");
      // return false;
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

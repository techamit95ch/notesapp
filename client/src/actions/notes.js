import * as api from "../api/index.js";

export const createFileNote = (post) => async (dispatch) => {
  try {
    console.log(post);
    const { data } = await api.createFileNote(post);
    console.log("-------------From Action Note ---------");
    console.log(data);
    console.log("-------------------------------");
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("-------------From Action note ---------");
    console.log(post);

    console.log({ message: error.message });
  }
};
export const noteTextCreate = async (noteData) => {
  try {
    // console.log(noteData);
    const { data } = await api.noteTextCreate(noteData);
    console.log("-------------From Action note ---------");
    console.log(data);
    // console.log("-------------------------------");
    // dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("-------------From Action note ---------");
    console.log(noteData);

    console.log({ message: error.message });
  }
};
// export const noteBase64tCreate = (noteData) => async (dispatch) => {
export const noteBase64tCreate = (post) => async (dispatch) => {
  try {
    // console.log(noteData);
    post.agent = localStorage.getItem("agent");

    const { data } = await api.noteTextCreate(post);
    console.log("-------------From Action note ---------");
    console.log(data);
    // console.log("-------------------------------");
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("-------------From Action note ---------");
    console.log(post);

    console.log({ message: error.message });
  }
};
export const getNotes = (props) => async (dispatch) => {
  try {
    // console.log("---------from Notes getNotes -----");
    props.agent = localStorage.getItem("agent");
    const { data } = await api.getNotes(props);
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getNote = (props) => async (dispatch) => {
  try {
    console.log("---------from getNote -----");
    console.log(props);
    // props.agent = localStorage.getItem("agent");
    const { data } = await api.getNote(props);
    console.log(data);
    dispatch({ type: "FETCH_NOTE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getSingleNote = async (props) => {
  try {
    console.log("---------from getNote -----");
    console.log(props);
    // props.agent = localStorage.getItem("agent");
    const { data } = await api.getNote(props);
    console.log(data);
    return data;
    // dispatch({ type: "FETCH_NOTE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


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

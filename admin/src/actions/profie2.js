import * as api from "../api";
export const AllProfile = () => async (dispatch) => {
    try {
      const { data } = await api.AllProfile();
      dispatch({ type: "FETCH_PROFILE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
}

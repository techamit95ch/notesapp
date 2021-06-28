export default (profile = [], action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return action.payload;

    // case "CREATE":
    //   return action.payload;

    default:
      return profile;
  }
};

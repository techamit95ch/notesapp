export default (authInfo={}, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return action.payload;

    default:
      return authInfo;
  }
};
// export default authInfo;

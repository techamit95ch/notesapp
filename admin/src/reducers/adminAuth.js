export default (authAdminInfo = {}, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_ADMIN_AUTH":
      return action.payload;
    case "CREATE":
      return action.payload;

    default:
      return authAdminInfo;
  }
};
// export default authInfo;

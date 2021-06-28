export default (nonclassrooms = [], action) => {
  switch (action.type) {
    // case "FETCH_ALL_CLASS":
    //   return action.payload;
    // case "FETCHCLASS":
    //   return action.payload;
    case "FETCH_UNJ_ALL":
      return action.payload;
    case "JOIN":
      return action.payload;

    default:
      return nonclassrooms;
  }
};

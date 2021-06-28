export default (classrooms = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_CLASS":
      return action.payload;
    case "FETCHCLASS":
      return action.payload;
    // case "FETCH_UNJ":
    //   return action.payload;
    case "CREATE":
      return action.payload;

    default:
      return classrooms;
  }
};

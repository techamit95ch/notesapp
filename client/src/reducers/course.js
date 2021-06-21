export default (course = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COURSES":
      return action.payload;
    //break;
    case "CREATE_COURSE":
      return [...course, action.payload];
    //break;
    case "DELETE":
      return course;

    //
    case "UPDATE":
      return course.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    //break;

    default:
      return course;
    //  break;
  }
};

const subject = (courses = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      // return courses.map((post) =>
      //   post.courseId === action.payload.courseId ? action.payload : post
      // );
      return action.payload;
    case "FETCH":
      return courses.map((post) =>
        post.courseId === action.payload.courseId ? action.payload : post
      );
    //break;
    case "CREATE":
      return [...courses, action.payload];
    //break;
    case "DELETE":
      return courses;

    //
    case "UPDATE":
      return courses.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    //break;

    default:
      return courses;
    //  break;
  }
};
export default subject;

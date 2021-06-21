const Course= (courses = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COURSES":
      return action.payload;
    //break;
    case "CREATE_COURSE":
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
export default  Course;

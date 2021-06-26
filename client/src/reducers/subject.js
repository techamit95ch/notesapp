export default (subjects = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH":
      return subjects.map((post) =>
        post.courseId === action.payload.courseId ? action.payload : post
      );
    //break;
    case "CREATE":
      return [...subjects, action.payload];
    //break;
    case "DELETE":
      return subjects;

    //
    case "UPDATE":
      return subjects.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    //break;

    default:
      return subjects;
    //  break;
  }
};
// export default subject;

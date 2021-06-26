export default  (notes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    // case "FETCH":
    //   return notes.map((post) =>
    //     post.courseId === action.payload.courseId ? action.payload : post
    //   );
    //break;
    case "CREATE":
      return [...notes, action.payload];
    //break;
    case "DELETE":
      return notes;

    //
    case "UPDATE":
      return notes.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    //break;

    default:
      return notes;
    //  break;
  }
};
// export default subject;

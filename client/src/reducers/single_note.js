export default (sigleNote = "", action) => {
  switch (action.type) {
    case "FETCH_NOTE":
      return action.payload;
    default:
      return sigleNote;
    //  break;
  }
};
// export default subject;

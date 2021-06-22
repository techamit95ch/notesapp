export const email = (posts = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
     
      case "CREATE":
        return [...posts, action.payload];
      
  
      default:
        return posts;
      
    }
  };
  export const createCourse = async (post) => {
    try {
      const { data } = await api.createCourse(post);
      console.log("-------------From Action Course ---------");
      console.log(data);
      console.log("-------------------------------");
      // dispatch({ type: "CREATE_COURSE", payload: data });
    } catch (error) {
      console.log("-------------From Action Course ---------");
      console.log(post);

      console.log({ message: error.message });
    }
  };
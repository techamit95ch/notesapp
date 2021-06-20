export const email = (posts = [], action) => {
    switch (action.type) {
      case "FETCH_UID":
        return action.payload;
     
      case "SEND":
        return [...posts, action.payload];
      
  
      default:
        return posts;
      
    }
  };
  
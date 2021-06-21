import express from "express";

import {
  // getPosts,

  createCourse,
  // updatePost,


} from "../controllers/course.js";

const courseRoute = express.Router();

// courseRoute.get("/", getPosts);
courseRoute.post("/", createCourse);

// courseRoute.patch("/:id", updatePost);



export default courseRoute;

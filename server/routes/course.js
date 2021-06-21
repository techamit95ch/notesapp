import express from "express";

import {
  getCourses,

  createCourse,
  // updatePost,


} from "../controllers/course.js";

const courseRoute = express.Router();

courseRoute.get("/", getCourses);
courseRoute.post("/", createCourse);

// courseRoute.patch("/:id", updatePost);



export default courseRoute;

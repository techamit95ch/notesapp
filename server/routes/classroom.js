import express from "express";

import {
//   getSubjects,
  createRoom,
  // updatePost,
} from "../controllers/classroom.js";

const classRoute = express.Router();

// classRoute.get("/:courseId", getSubjects);
classRoute.post("/", createRoom);

// courseRoute.patch("/:id", updatePost);

export default classRoute;

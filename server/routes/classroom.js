import express from "express";

import {
  //   getSubjects,
  createRoom,
  getRooms,
  // updatePost,
} from "../controllers/classroom.js";

const classRoute = express.Router();

// classRoute.get("/:courseId", getSubjects);
classRoute.post("/getRooms", getRooms);
classRoute.post("/", createRoom);

// courseRoute.patch("/:id", updatePost);

export default classRoute;

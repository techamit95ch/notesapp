import express from "express";

import {
  //   getSubjects,
  createRoom,
  getRooms,
  getJoinRooms,
  joinRoom,
  getSubjectRooms,
  // updatePost,
} from "../controllers/classroom.js";

const classRoute = express.Router();

// classRoute.get("/:courseId", getSubjects);
classRoute.post("/getRooms", getRooms);
classRoute.post("/getSubjectRooms", getSubjectRooms);
classRoute.post("/unjoinedRooms", getJoinRooms);
classRoute.post("/", createRoom);
classRoute.post("/join", joinRoom);

// courseRoute.patch("/:id", updatePost);

export default classRoute;

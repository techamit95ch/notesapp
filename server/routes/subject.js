import express from "express";

import {
  getSubjects,
  createSubject,
  getAllSubjects,
  // updatePost,
} from "../controllers/subject.js";

const subjectRoute = express.Router();

subjectRoute.get("/:courseId", getSubjects);
subjectRoute.get("/", getAllSubjects);
subjectRoute.post("/", createSubject);

// courseRoute.patch("/:id", updatePost);

export default subjectRoute;

import express from "express";

import {
  getSubjects,
  createSubject,
  // updatePost,
} from "../controllers/subject.js";

const subjectRoute = express.Router();

subjectRoute.get("/:courseId", getSubjects);
subjectRoute.post("/", createSubject);

// courseRoute.patch("/:id", updatePost);

export default subjectRoute;

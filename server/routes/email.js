import express from "express";

import {
  getEmail,
  // updatePost,
} from "../controllers/email.js";

const emailRoute = express.Router();

// subjectRoute.get("/:courseId", getSubjects);
emailRoute.post("/", getEmail);

// courseRoute.patch("/:id", updatePost);

export default emailRoute;

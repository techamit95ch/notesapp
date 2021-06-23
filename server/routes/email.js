import express from "express";

import {
  sendEmail,
  // updatePost,
} from "../controllers/email.js";

const emailRoute = express.Router();

// subjectRoute.get("/:courseId", getSubjects);
emailRoute.post("/", sendEmail);

// courseRoute.patch("/:id", updatePost);

export default emailRoute;

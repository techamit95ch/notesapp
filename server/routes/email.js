import express from "express";

import {
  sendEmail,
  matchUID,
  // updatePost,
} from "../controllers/email.js";

const emailRoute = express.Router();

// subjectRoute.get("/:courseId", getSubjects);
emailRoute.post("/", sendEmail);
emailRoute.get("/:uid", matchUID);
// emailRoute.get("/", getEmail);

// courseRoute.patch("/:id", updatePost);

export default emailRoute;
